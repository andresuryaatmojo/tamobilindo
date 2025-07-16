import React from "react";
import { Car } from "lucide-react";

const Header: React.FC = () => (
  <header className="bg-white border-b border-secondary/20 py-3 px-8 flex items-center gap-4 font-sans">
    <Car className="text-accent" size={32} />
    <div>
      <h1 className="text-2xl font-bold text-primary leading-tight">Mobilindo</h1>
      <p className="text-sm text-muted font-medium">Jual Beli Mobil Bekas & Baru Profesional</p>
    </div>
  </header>
);

export default Header;
