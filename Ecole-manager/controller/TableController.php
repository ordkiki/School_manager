
<?php
require_once __DIR__ . '/../config/Database.php';

use Config\Database;

class TableController
{
    private $database;
    public function __construct()
    {
        $this->database = new Database;
    }
    public function Table (){
        $this->database->createTable();
    }
}
?>