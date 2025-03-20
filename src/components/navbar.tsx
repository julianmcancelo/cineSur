import { Link } from "react-router-dom";
import { FaHome, FaFilm, FaUserCog } from "react-icons/fa";
import useDevice from "../hooks/useDevice"; // 📌 Importamos el Hook

const Navbar: React.FC = () => {
  const isMobile = useDevice(); // 📌 Detectamos si es móvil o PC

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md ${isMobile ? "px-4 py-2" : "px-6 py-3"} rounded-full flex items-center gap-6 z-50`}>
      
      {/* Inicio */}
      <Link to="/" className="flex items-center gap-2 text-gray-900 hover:text-red-600 transition">
        <FaHome className="text-lg" />
        <span className={`${isMobile ? "hidden" : "inline"} text-sm font-semibold`}>Inicio</span>
      </Link>

      {/* Películas */}
      <Link to="/peliculas" className="flex items-center gap-2 text-gray-900 hover:text-red-600 transition">
        <FaFilm className="text-lg" />
        <span className={`${isMobile ? "hidden" : "inline"} text-sm font-semibold`}>Películas</span>
      </Link>

      {/* Administración */}
      <Link to="/admin" className="flex items-center gap-2 text-gray-900 hover:text-red-600 transition">
        <FaUserCog className="text-lg" />
        <span className={`${isMobile ? "hidden" : "inline"} text-sm font-semibold`}>Admin</span>
      </Link>

    </nav>
  );
};

export default Navbar;
