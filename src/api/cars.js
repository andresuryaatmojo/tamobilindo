import { getToken } from "./auth";

export async function fetchCars() {
  const res = await fetch("http://localhost:5000/api/cars");
  return await res.json();
}

export async function fetchCar(id) {
  const res = await fetch(`http://localhost:5000/api/cars/${id}`);
  return await res.json();
}

export async function addCar(formData) {
  const token = getToken();
  const res = await fetch("http://localhost:5000/api/cars", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  return await res.json();
}
