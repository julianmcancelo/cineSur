import mysql from "mysql2/promise";

export default async function handler(req, res) {
  try {
    // 📌 Conectar a MySQL usando variables de entorno
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    // 📌 Ejecutar la consulta SQL
    const [rows] = await connection.execute("SELECT * FROM peliculas");

    // 📌 Cerrar la conexión
    await connection.end();

    // 📌 Responder con los datos
    res.status(200).json({ success: true, data: rows });

  } catch (error) {
    console.error("❌ Error en la API:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
}
