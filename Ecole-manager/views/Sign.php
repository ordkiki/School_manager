<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Vérifier si la requête est POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lire les données JSON reçues
    $data = json_decode(file_get_contents("php://input"), true);

    // Exemple de traitement
    $name = $data['Name'] ?? null;
    $email = $data['Email'] ?? null;
    $mdp = $data['Mdp'] ?? null;

    if ($name && $email && $mdp) {
        echo json_encode(["status" => "success", "message" => "Utilisateur ajouté"]);
    } else {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Données manquantes"]);
    }
    exit;
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Méthode non autorisée"]);
}
?>
