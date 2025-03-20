import { Link } from "react-router-dom";
import { FaFilm, FaUserCog } from "react-icons/fa"; // 📌 Solo dejamos los iconos necesarios

const AdminPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold text-red-600 text-center mb-6">⚙️ Administración</h1>

      <div className="space-y-4">
        {/* 📌 Opción para gestionar películas */}
        <Link to="/admin/peliculas" className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-center font-semibold">
          📽️ Gestionar Películas
        </Link>

        {/* 📌 Opción para agregar película */}
        <Link to="/admin/agregar" className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-center font-semibold">
          ➕ Agregar Nueva Película
        </Link>

        {/* 📌 Opción para administrar usuarios */}
        <Link to="/admin/usuarios" className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-center font-semibold">
          👥 Administración de Usuarios
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
