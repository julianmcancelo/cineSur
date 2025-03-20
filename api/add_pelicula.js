import mysql from "mysql2/promise";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { titulo, anio, imagen, video, sinopsis } = req.body;

  if (!titulo || !anio || !imagen || !video || !sinopsis) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST, // 📌 Agregar en Vercel
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    const query = "INSERT INTO peliculas (titulo, anio, imagen, video, sinopsis) VALUES (?, ?, ?, ?, ?)";
    await connection.execute(query, [titulo, anio, imagen, video, sinopsis]);

    return res.status(200).json({ success: "Película agregada correctamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al agregar película: " + error.message });
  }
}
