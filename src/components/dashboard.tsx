import { Link } from "react-router-dom";
import { FaFilm, FaPlusCircle, FaUserCog } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold text-red-600 text-center mb-6">🎬 Dashboard</h1>

      <div className="space-y-4">
        <Link to="/peliculas" className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <FaFilm className="text-2xl text-red-600" />
          <span className="text-lg font-semibold">📽️ Ver Películas</span>
        </Link>

        <Link to="/admin" className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <FaPlusCircle className="text-2xl text-red-600" />
          <span className="text-lg font-semibold">➕ Agregar Película</span>
        </Link>

        <Link to="/admin" className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <FaUserCog className="text-2xl text-red-600" />
          <span className="text-lg font-semibold">⚙️ Administración</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
