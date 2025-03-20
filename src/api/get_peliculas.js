import mysql from "mysql2/promise";

export default async function handler(req, res) {
  try {
    // 📌 Conectar a MySQL
    const connection = await mysql.createConnection({
      host: "167.250.5.55",  // 🔹 O la IP de tu servidor MySQL
      user: "jcancelo_github",
      password: "feelthesky1",
      database: "jcancelo_cinesur"
    });

    // 📌 Ejecutar la consulta
    const [rows] = await connection.execute("SELECT * FROM peliculas");

    // 📌 Enviar los datos en formato JSON
    res.status(200).json({ success: true, data: rows });

    // 📌 Cerrar la conexión
    await connection.end();

  } catch (error) {
    console.error("❌ Error en la API:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
}
