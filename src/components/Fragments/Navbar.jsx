import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../utils/data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 transition-all bg-white shadow-md navbar duration-400">
      <div className="max-w-[1200px] mx-auto w-[90%] flex items-center justify-between">
        <Link to="/" className="text-4xl font-bold">
          Zest<span className="text-slate-500">Zen</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
