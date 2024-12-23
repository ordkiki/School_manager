<?php
namespace Config;

class Database {
    private $host = "localhost";
    private $db_name = "ecole_manager";
    private $username = "root";
    private $password = "";
    public $conn;

    // Méthode pour créer les tables
    public function createTable() {
        try {
            // Obtenir la connexion
            $this->getConnection();

            // Liste des tables à créer
            $tables = [
                "users" => "
                    CREATE TABLE IF NOT EXISTS users (
                        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        Nom VARCHAR(255) NOT NULL,
                        Email VARCHAR(255) NOT NULL UNIQUE,
                        Mdp VARCHAR(255) NOT NULL
                    );
                ",
                "eleves" => "
                    CREATE TABLE IF NOT EXISTS eleves (
                        Matricule INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        Nom VARCHAR(255) NOT NULL,
                        Prenom VARCHAR(255) NOT NULL,
                        Classe VARCHAR(255) NOT NULL,
                        Ecole_annuel VARCHAR(255) NOT NULL,
                        Ville_naiss VARCHAR(255) NOT NULL,
                        Tel VARCHAR(255) NOT NULL,
                        Sexe VARCHAR(10) NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                ",
                "enseignants" => "
                    CREATE TABLE IF NOT EXISTS enseignants (
                        Id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        Nom VARCHAR(255) NOT NULL,
                        Prenom VARCHAR(255) NOT NULL,
                        Ville_naiss VARCHAR(255) NOT NULL,
                        Tel VARCHAR(255) NOT NULL,
                        Sexe VARCHAR(10) NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                "
            ];

            // Exécution des requêtes pour chaque table
            foreach ($tables as $name => $sql) {
                $this->conn->exec($sql);
                // echo "Table '{$name}' créée ou déjà existante.\n";
            }
        } catch (\PDOException $e) {
            die("Erreur lors de la création des tables : " . $e->getMessage());
        }
    }

    // Méthode pour obtenir la connexion à la base de données
    public function getConnection() {
        if ($this->conn === null) {
            try {
                $this->conn = new \PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
                $this->conn->exec("set names utf8");
            } catch (\PDOException $e) {
                die("Échec de la connexion : " . $e->getMessage());
            }
        }
        return $this->conn;
    }
}
?>
