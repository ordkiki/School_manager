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
        $data['Nom'] = strtoupper($data['Nom']);
        if ($this->ElevesModel->Inscire_Eleve($data)) {
            echo json_encode(["message" => "Création réussie"]);
        } else {
            echo json_encode(["message" => "Échec de la création"]);
        }
    }

    public function Get_User()
    {
        $eleves = $this->ElevesModel->ListeEleve();
        echo json_encode($eleves);
    }
    public function Get_ElevesByMatricule($Matricule)
    {
        $eleves = $this->ElevesModel->Get_WithMatricule($Matricule);
        echo json_encode($eleves);
    }
    public function Delete_user($Matricule)
    {
        $eleves = $this->ElevesModel->RemoveByMatricule($Matricule);
        echo json_encode($eleves);
    }
    public function Put($Matricule)
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (!isset($data['Nom'], $data['Prenom'], $data['Tel'])) {
            echo json_encode(["message" => "Données invalides ou incomplètes."]);
            http_response_code(400);
            return;
        }


        if ($this->ElevesModel->Modify_ByMatricule($data, $Matricule)) {
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
