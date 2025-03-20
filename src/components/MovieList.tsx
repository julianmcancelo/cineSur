import React, { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  id: number;
  titulo: string;
  anio: number;
  imagen: string;
  video: string;
  sinopsis: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://jcancelo.dev/api/get_peliculas.php")
      .then(response => {
        console.log("📽️ Datos recibidos de la API:", response.data); // 🔹 Verifica qué devuelve la API
        if (response.data.success) {
          setMovies(response.data.data);
        } else {
          setError("❌ No se encontraron películas.");
        }
      })
      .catch(error => {
        console.error("❌ Error en la solicitud:", error);
        setError("❌ No se pudo conectar con el servidor.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-gray-500">🔄 Cargando películas...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">🎬 Películas Disponibles</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={movie.imagen} alt={movie.titulo} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{movie.titulo}</h3>
            <p className="text-gray-500 text-sm">{movie.anio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
