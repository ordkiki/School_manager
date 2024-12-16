<?php
    require_once __DIR__ . '/controller/ElevesController.php';
    require_once __DIR__ . '/controller/UserController.php';
    // require_once __DIR__ . '/config/Header.php';
    require_once __DIR__ . '/Routes/Router.config.php';

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Credentials: true");
    
    // Répondre aux requêtes OPTIONS (pré-vérifications CORS)
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }
    // print_r($method);

?>
