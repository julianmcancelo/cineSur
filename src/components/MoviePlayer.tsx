import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import useDevice from "../hooks/useDevice"; // 📌 Importamos el Hook

interface Movie {
  id: number;
  titulo: string;
  video: string;
}

interface MoviePlayerProps {
  movies: Movie[];
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ movies }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));
  const isMobile = useDevice(); // 📌 Detectamos si es móvil o PC
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && isMobile) {
      playerRef.current.requestFullscreen().catch(err => console.log("⚠ No se pudo entrar en pantalla completa", err));
    }
  }, [isMobile]);

  if (!movie) {
    return <div className="text-center text-red-500">❌ Película no encontrada</div>;
  }

  return (
    <div ref={playerRef} className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <ReactPlayer 
        url={movie.video} 
        playing 
        controls 
        width={isMobile ? "100vw" : "80vw"} 
        height={isMobile ? "100vh" : "45vw"} 
        className="absolute top-0 left-0" 
      />
      <button 
        onClick={() => navigate("/peliculas")} 
        className="absolute top-4 left-4 px-4 py-2 bg-red-600 text-white rounded-lg z-50 hover:bg-red-700"
      >
        ⬅ Salir
      </button>
    </div>
  );
};

export default MoviePlayer;
