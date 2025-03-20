import React from "react";
import { Link } from "react-router-dom"; // ✅ Usado correctamente en los botones

interface Movie {
  id: number;
  titulo: string;
  anio: number;
  imagen: string;
  video: string;
  sinopsis: string;
}

interface MovieListProps { // ✅ Definir el tipo de `movies`
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">🎬 Películas Disponibles</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.length === 0 ? (
          <p className="text-center text-gray-500">❌ No hay películas disponibles.</p>
        ) : (
          movies.map((movie) => (
            <Link key={movie.id} to={`/pelicula/${movie.id}`} className="bg-white p-4 rounded-lg shadow-md">
              <img src={movie.imagen} alt={movie.titulo} className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{movie.titulo}</h3>
              <p className="text-gray-500 text-sm">{movie.anio}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
