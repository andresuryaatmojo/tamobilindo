import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SimulasiKreditPage from "./pages/SimulasiKredit";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/common/Chatbot";
import News from "./pages/News";
import Sell from "./pages/Sell";

function App() {
  const location = useLocation();
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* <Header /> */}
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/car/:id" element={<CarDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/simulasi-kredit" element={<SimulasiKreditPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/news" element={<News />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
