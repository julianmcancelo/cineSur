import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList"; // ✅ Asegurar que está bien importado
import MoviePlayer from "./components/MoviePlayer";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./components/Dashboard";
import MovieForm from "./components/MovieForm";

interface Movie {
  id: number;
  titulo: string;
  anio: number;
  imagen: string;
  video: string;
  sinopsis: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // ✅ Asegurar el tipo correcto

  useEffect(() => {
    const API_BASE_URL = window.location.protocol === "https:" 
      ? "https://jcancelo.dev/api/get_peliculas.php" 
      : "http://jcancelo.dev/api/get_peliculas.php";

    axios.get(API_BASE_URL)
      .then(response => {
        console.log("📽️ Datos recibidos de la API:", response.data);
        if (response.data.success) {
          setMovies(response.data.data);
        } else {
          console.error("❌ No se encontraron películas.");
        }
      })
      .catch(error => console.error("❌ Error cargando las películas:", error));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/peliculas" element={<MovieList movies={movies} />} />  {/* ✅ Ya no habrá error */}
        <Route path="/pelicula/:id" element={<MoviePlayer movies={movies} />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/agregar" element={<MovieForm />} />
      </Routes>
    </Router>
  );
};

export default App;
