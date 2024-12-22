<?php
class UserModel
{
    private $id;
    private $Nom;
    private $Mdp;
    private $Email;
    private $conn;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function GetUsername()
    {
        return $this->Nom;
    }

    public function GetID()
    {
        return $this->id;
    }

    public function GetEmail()
    {
        return $this->Email;
    }

    public function GetMdp()
    {
        return $this->Mdp;
    }

    public function Sign_User($data)
    {
        $sql = "INSERT INTO users (Nom, Mdp, Email)
                    VALUES (:Nom , :Mdp, :Email)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':Nom', $data['Nom']);
        $stmt->bindParam(':Mdp', $data['Mdp']);
        $stmt->bindParam(':Email', $data['Email']);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function ShowUser()
    {
        $sql = "SELECT * FROM users";
        $stmt = $this->conn->query($sql);
        if ($stmt->execute()) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return false;
    }
    
    public function ShowUserByEmail($Email)
    {
        $sql = "SELECT * FROM users WHERE Email = :Email";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':Email', $Email, PDO::PARAM_STR);
        if ($stmt->execute()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        return false;
    }

    public function ShowUserId($id)
    {
        $sql = "SELECT * FROM users WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        if ($stmt->execute()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        return false;
    }
    
    public function Delete_user($id)
    {
        $sql = "DELETE FROM users WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }
    public function Edit_user($data, $id)
    {
        $sql = "UPDATE users SET Nom = :Nom, Mdp = :Mdp, Email = :Email WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':Nom', $data['Nom']);
        $stmt->bindParam(':Mdp', $data['Mdp']);
        $stmt->bindParam(':Email', $data['Email']);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);

        return $stmt->execute();
    }
}
