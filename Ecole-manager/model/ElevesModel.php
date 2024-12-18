<?php
class ElevesModel
{
    private $Matricule;
    private $Nom;
    private $Prenom;
    private $Classe;
    private $Ecole_annuel;
    private $Ville_naiss;
    private $Tel;
    private $Sexe;
    private $conn;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function GetUsername()
    {
        return $this->Nom;
    }

    public function GetMatricule()
    {
        return $this->Matricule;
    }

    public function GetPrenom()
    {
        return $this->Prenom;
    }

    public function GetClasse()
    {
        return $this->Classe;
    }
    public function GetEcole_annuel()
    {
        return $this->Ecole_annuel;
    }
    public function GetVille_naiss()
    {
        return $this->Ville_naiss;
    }
    public function GetSexe()
    {
        return $this->Sexe;
    }
    public function GetTel()
    {
        return $this->Tel;
    }

    public function Inscire_Eleve($data)
    {
        $sql = "INSERT INTO Eleves (Nom, Prenom, Classe,Ecole_annuel, Ville_naiss,  Tel, Sexe)
                    VALUES (:Nom, :Prenom, :Classe, :Ecole_annuel, :Ville_naiss,  :Tel, :Sexe)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':Nom', $data['Nom']);
        $stmt->bindParam(':Prenom', $data['Prenom']);
        $stmt->bindParam(':Classe', $data['Classe']);
        $stmt->bindParam(':Ecole_annuel', $data['Ecole_annuel']);
        $stmt->bindParam(':Ville_naiss', $data['Ville_naiss']);
        $stmt->bindParam(':Tel', $data['Tel']);
        $stmt->bindParam(':Sexe', $data['Ville_naiss']);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function ListeEleve()
    {
        $sql = "SELECT * FROM Eleves";
        $stmt = $this->conn->query($sql);
        if ($stmt->execute()) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return false;
    }

    public function RemoveByMatricule($matricule)
    {
        $sql = "DELETE FROM Eleves WHERE Matricule = :Matricule";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $matricule, PDO::PARAM_INT);
        return $stmt->execute();
    }
    public function Modify_ByMatricule($data, $matricule)
    {
        $sql = "UPDATE Users
            SET Nom = :Nom, Prenom = :Prenom, Classe = :Classe,Ecole_annuel = :Ecole_annuel, Ville_naiss = :Ville_naiss,  Tel = :Tel, Sexe = :Sexe
            WHERE Id_user = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':Nom', $data['Nom']);
        $stmt->bindParam(':Prenom', $data['Prenom']);
        $stmt->bindParam(':Classe', $data['Classe']);
        $stmt->bindParam(':Ecole_annuel', $data['Ecole_annuel']);
        $stmt->bindParam(':Ville_naiss', $data['Ville_naiss']);
        $stmt->bindParam(':Tel', $data['Tel']);
        $stmt->bindParam(':Sexe', $data['Ville_naiss']);
        $stmt->bindParam(':Matricule', $matricule, PDO::PARAM_INT);

        return $stmt->execute();
    }
}
