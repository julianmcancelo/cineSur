<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// Manejar preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["error" => "Método no permitido"]);
    http_response_code(405);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data["titulo"], $data["anio"], $data["imagen"], $data["video"], $data["sinopsis"])) {
    echo json_encode(["error" => "Datos incompletos"]);
    http_response_code(400);
    exit();
}

// Conectar con MySQL
require "config.php";

$stmt = $conn->prepare("INSERT INTO peliculas (titulo, anio, imagen, video, sinopsis) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sisss", $data["titulo"], $data["anio"], $data["imagen"], $data["video"], $data["sinopsis"]);

if ($stmt->execute()) {
    echo json_encode(["success" => "Película agregada"]);
    header("Location: https://cinesur.vercel.app/admin"); // 🔄 Redirigir después de agregar
    exit();
} else {
    echo json_encode(["error" => "Error al agregar"]);
}
