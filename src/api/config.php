<?php
$host = "localhost";
$user = "jcancelo_github"; // Cambia si tenés otro usuario
$password = "feelthesky1"; // Pon tu contraseña si tenés
$dbname = "jcancelo_cinesur";

// Conectar a MySQL
$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Error de conexión a la base de datos: " . $conn->connect_error]));
}
?>
