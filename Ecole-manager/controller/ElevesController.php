<?php
require_once __DIR__ . '/../model/ElevesModel.php';
require_once __DIR__ . '/../config/Database.php';

use Config\Database;

class ElevesController
{
    private $ElevesModel;

    public function __construct()
    {
        $database = new Database;
        $db = $database->GetConnection();
        $this->ElevesModel = new ElevesModel($db);
    }

    public function Create()
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data) {
            echo json_encode(["message" => "Données JSON invalides"]);
            return;
        }

        if ($this->ElevesModel->Inscire_Eleve($data)) {
            echo json_encode(["message" => "Création réussie"]);
        } else {
            echo json_encode(["message" => "Échec de la création"]);
        }
    }

    public function Get_User()
    {
        $Users = $this->ElevesModel->ListeEleve();
        echo json_encode($Users);
    }
    public function Delete_user($id)
    {
        $Users = $this->ElevesModel->Remove_User_ById($id);
        echo json_encode($Users);
    }
    public function Put($id)
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (!isset($data['Nom'], $data['Prenom'], $data['Email'], $data['Telephone'])) {
            echo json_encode(["message" => "Données invalides ou incomplètes."]);
            http_response_code(400);
            return;
        }


        if ($this->ElevesModel->Modify_userById($data, $id)) {
            echo json_encode([
                "Nom"     => $data['Nom'],
                "success" => true,
                "message" => "Utilisateur mis à jour avec succès."
            ]);
        } else {
            echo json_encode(["message" => "Échec de la Maj"]);
        }
    }
}
