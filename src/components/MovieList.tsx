import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  titulo: string;
  imagen: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-bold text-red-600 text-center mb-4">🎥 Películas</h2>
      <div className="grid grid-cols-2 gap-4">
        {movies.map(movie => (
          <div key={movie.id} onClick={() => navigate(`/pelicula/${movie.id}`)} 
            className="cursor-pointer transition hover:scale-105">
            <img src={movie.imagen} alt={movie.titulo} className="w-full h-auto rounded-lg shadow-sm" />
            <h3 className="text-center text-sm text-gray-800 mt-2 font-semibold">{movie.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
