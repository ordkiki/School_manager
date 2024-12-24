<?php
require_once __DIR__ . '/../model/UserModel.php';
require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../error/validation.err.php';

use ErrorLog;
use Config\Database;

use function ErrorLog\validate_mdp;
use function ErrorLog\validatePassword;
use function ErrorLog\verify_mdp;

class UserController
{
    private $UserModel;

    public function __construct()
    {
        $database = new Database;
        
        $db = $database->GetConnection();
        $this->UserModel = new UserModel($db);
    }

    public function Signin()
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data || !isset($data['Email'], $data['Mdp'])) {
            echo json_encode(["message" => "Données JSON invalides ou incomplètes"]);
            http_response_code(400);
            return;
        }

        if (!validatePassword( $data['Mdp'])) {
            echo json_encode(["message" => "La longueur de la mot de passe doit comporter de majuscule, une chiffre minimum et longueur>8"]);
            http_response_code(400);
            return;
        }
        $data['Mdp'] = password_hash($data['Mdp'], PASSWORD_BCRYPT);

        if ($this->UserModel->Sign_User($data)) {
            echo json_encode(["message" => "Création réussie"]);
            http_response_code(201);
        } else {
            echo json_encode(["message" => "Échec de la création"]);
            http_response_code(500);
        }
    }

    public function Login()
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data || !isset($data['Email'], $data['Mdp'])) {
            echo json_encode(["message" => "Données JSON invalides ou incomplètes"]);
            http_response_code(400);
            return;
        }
        
        $user = $this->UserModel->ShowUserByEmail($data['Email']);
        if ($user && password_verify($data['Mdp'], $user['Mdp'])) {
            session_start();
            $_SESSION['useremail'] = $data['Email'];
        } else {
            echo json_encode(["message" => "Email ou mot de passe incorrect"]);
            http_response_code(401);
        }
    }



    public function LogOut()
    {
        session_destroy();
    }



    public function Get_User()
    {
        $Users = $this->UserModel->ShowUser();
        echo json_encode($Users);
    }
    public function Delete_user($id)
    {
        $Users = $this->UserModel->Delete_user($id);
        echo json_encode($Users);
    }

    public function Put($id)
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (!isset($data['Nom'], $data['Mdp'], $data['Email'])) {
            echo json_encode(["message" => "Données invalides ou incomplètes."]);
            http_response_code(400);
            return;
        }


        if ($this->UserModel->Edit_user($data, $id)) {
            echo json_encode([
                "success" => true,
                "message" => "Utilisateur mis à jour avec succès."
            ]);
        } else {
            echo json_encode(["message" => "Échec de la Maj"]);
        }
    }

    public function CheckSession()
    {
        session_start();
        if (isset($_SESSION['useremail'])) {
            echo json_encode(["loggedIn" => true, "email" => $_SESSION['useremail']]);
        } else {
            echo json_encode(["loggedIn" => false]);
        }
        
    }
}
