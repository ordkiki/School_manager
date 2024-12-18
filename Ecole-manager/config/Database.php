<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

namespace Config;

class Database
{
    private $host = "localhost";
    private $db_name = "ecole_manager";
    private $username = "root";
    private $password = "";
    public $conn;

    
    public function CreatTable()
    {

    }

    public function GetConnection()
    {
        $this->conn = null;
        try {
            $this->conn = new \PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (\PDOException $e) {
            die("Échec de la connexion : " . $e->getMessage());
        }
        return $this->conn;
    }
}
