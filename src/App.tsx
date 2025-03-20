import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import useDevice from "./hooks/useDevice"; // 📌 Importamos el Hook
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MoviePlayer from "./components/MoviePlayer";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./components/Dashboard";
import MovieForm from "./components/MovieForm"; // 📌 Importa el formulario

interface Movie {
  id: number;
  titulo: string;
  anio: number;
  imagen: string;
  video: string;
  sinopsis: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const isMobile = useDevice(); // 📌 Detectamos si es móvil o PC

  useEffect(() => {
    const API_BASE_URL = window.location.protocol === "https:" 
  ? "https://jcancelo.dev/api/get_peliculas.php" 
  : "http://jcancelo.dev/api/get_peliculas.php";

axios.get(API_BASE_URL)
      .then(response => setMovies(response.data.data || []))
      .catch(() => console.error("❌ Error cargando películas"));
  }, []);

  return (
    <Router>
      <div className={`${isMobile ? "bg-white text-gray-900" : "bg-gray-100 text-gray-900"}`}>
        <Navbar />
        <div className={`p-4 ${isMobile ? "max-w-full mx-auto mt-16" : "max-w-lg mx-auto mt-20"}`}>
        <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/peliculas" element={<MovieList movies={movies} />} />
  <Route path="/pelicula/:id" element={<MoviePlayer movies={movies} />} />
  <Route path="/admin" element={<AdminPage />} />
  <Route path="/admin/agregar" element={<MovieForm />} /> {/* ✅ Asegúrate de que esta línea está */}
</Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
