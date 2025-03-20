import React, { useState } from "react";
import axios from "axios";

const MovieForm: React.FC = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    anio: "",
    imagen: "",
    video: "",
    sinopsis: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);

  // 📌 Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false); // Reinicia el estado de error
  };

  // 📌 Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!formData.titulo || !formData.anio || !formData.imagen || !formData.video || !formData.sinopsis) {
      setMensaje("⚠ Todos los campos son obligatorios.");
      setError(true);
      return;
    }

    try {
      const response = await axios.post("http://jcancelo.dev/api/add_pelicula.php", formData);
      setMensaje(response.data.message || "✅ Película agregada correctamente.");
      setFormData({ titulo: "", anio: "", imagen: "", video: "", sinopsis: "" }); // Limpiar formulario
    } catch (error) {
      setMensaje("❌ Error al agregar la película.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 p-6">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">🎬 Agregar Nueva Película</h2>

        {/* Mensaje de éxito o error */}
        {mensaje && <p className={`text-center text-lg font-semibold ${error ? "text-red-500" : "text-green-600"} mb-4`}>{mensaje}</p>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          
          {/* Título */}
          <div>
            <label className="block text-lg font-semibold">Título:</label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-100 border ${error && !formData.titulo ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-red-500 focus:border-red-500`}
              placeholder="Ejemplo: El Padrino"
            />
          </div>

          {/* Año */}
          <div>
            <label className="block text-lg font-semibold">Año:</label>
            <input
              type="number"
              name="anio"
              value={formData.anio}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-100 border ${error && !formData.anio ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-red-500 focus:border-red-500`}
              placeholder="Ejemplo: 1972"
            />
          </div>

          {/* Imagen */}
          <div>
            <label className="block text-lg font-semibold">URL de Imagen:</label>
            <input
              type="text"
              name="imagen"
              value={formData.imagen}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-100 border ${error && !formData.imagen ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-red-500 focus:border-red-500`}
              placeholder="Ejemplo: https://example.com/poster.jpg"
            />
          </div>

          {/* Video */}
          <div>
            <label className="block text-lg font-semibold">URL del Video:</label>
            <input
              type="text"
              name="video"
              value={formData.video}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-100 border ${error && !formData.video ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-red-500 focus:border-red-500`}
              placeholder="Ejemplo: https://www.youtube.com/watch?v=XXXXX"
            />
          </div>

          {/* Sinopsis */}
          <div>
            <label className="block text-lg font-semibold">Sinopsis:</label>
            <textarea
              name="sinopsis"
              value={formData.sinopsis}
              onChange={handleChange}
              rows={4}
              className={`w-full p-3 bg-gray-100 border ${error && !formData.sinopsis ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-red-500 focus:border-red-500`}
              placeholder="Breve descripción de la película..."
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="mt-4 w-full p-3 bg-red-600 hover:bg-red-700 transition text-white text-lg font-semibold rounded-lg shadow-md"
          >
            ➕ Agregar Película
          </button>

        </form>
      </div>
    </div>
  );
};

export default MovieForm;
