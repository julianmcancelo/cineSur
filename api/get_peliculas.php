<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require "config.php"; // 📌 Asegura que la configuración se carga correctamente

// 📌 Verifica la conexión a la base de datos
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Error de conexión: " . $conn->connect_error]));
}

$sql = "SELECT id, titulo, anio, imagen, video, sinopsis FROM peliculas";
$result = $conn->query($sql);

$peliculas = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $peliculas[] = [
            "id" => (int) $row["id"],
            "titulo" => $row["titulo"],
            "anio" => (int) $row["anio"],
            "imagen" => $row["imagen"],
            "video" => $row["video"],
            "sinopsis" => $row["sinopsis"]
        ];
    }
    echo json_encode(["status" => "success", "data" => $peliculas], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["status" => "error", "message" => "No se encontraron películas"]);
}

$conn->close();
?>
