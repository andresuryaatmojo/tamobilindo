const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const Car = require("../models/Car");
const User = require("../models/User");
const path = require("path");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_"));
  },
});
const upload = multer({ storage });

// Middleware JWT
function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token tidak ditemukan" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Token tidak valid" });
  }
}

// GET semua mobil
router.get("/", async (req, res) => {
  const cars = await Car.find().sort({ createdAt: -1 });
  res.json(cars);
});

// GET detail mobil
router.get("/:id", async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) return res.status(404).json({ message: "Mobil tidak ditemukan" });
  res.json(car);
});

// POST tambah mobil (dengan upload gambar)
router.post("/", auth, upload.array("images", 10), async (req, res) => {
  try {
    const { name, merk, model, year, price, specs, description, location } =
      req.body;
    const images = req.files
      ? req.files.map((f) => "/uploads/" + f.filename)
      : [];
    const car = await Car.create({
      name,
      merk,
      model,
      year,
      price,
      specs: JSON.parse(specs),
      description,
      location,
      images,
      createdBy: req.user.id,
    });
    res.status(201).json({ message: "Mobil berhasil ditambahkan", car });
  } catch (err) {
    res.status(400).json({ message: "Gagal tambah mobil", error: err.message });
  }
});

// PUT edit mobil
router.put("/:id", auth, upload.array("images", 10), async (req, res) => {
  try {
    const { name, merk, model, year, price, specs, description, location } =
      req.body;
    const images = req.files
      ? req.files.map((f) => "/uploads/" + f.filename)
      : undefined;
    const update = {
      name,
      merk,
      model,
      year,
      price,
      specs: JSON.parse(specs),
      description,
      location,
    };
    if (images && images.length > 0) update.images = images;
    const car = await Car.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    if (!car) return res.status(404).json({ message: "Mobil tidak ditemukan" });
    res.json({ message: "Mobil berhasil diupdate", car });
  } catch (err) {
    res.status(400).json({ message: "Gagal update mobil", error: err.message });
  }
});

// DELETE hapus mobil
router.delete("/:id", auth, async (req, res) => {
  const car = await Car.findByIdAndDelete(req.params.id);
  if (!car) return res.status(404).json({ message: "Mobil tidak ditemukan" });
  res.json({ message: "Mobil berhasil dihapus" });
});

module.exports = router;
