import { Link } from "react-router-dom";
import { FaFilm, FaPlusCircle, FaUsers } from "react-icons/fa";

const AdminPage: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold text-red-600 text-center mb-6">⚙️ Administración</h1>

      <div className="space-y-4">
        <Link to="/peliculas" className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <FaFilm className="text-2xl text-red-600" />
          <span className="text-lg font-semibold">🎬 Gestionar Películas</span>
        </Link>

        <Link to="/admin" className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <FaUsers className="text-2xl text-red-600" />
          <span className="text-lg font-semibold">👥 Usuarios</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
