<?php
namespace ErrorLog;


function verifyPasswordLength(string $password, int $minLength = 8): bool {
    return strlen($password) >= $minLength;
}


function validatePassword(string $password): bool {
    if (!verifyPasswordLength($password)) {
        return false;
    }

    // Vérifie la présence d'au moins un chiffre
    $hasNumber = preg_match('/\d/', $password);

    // Vérifie la présence d'au moins un caractère spécial
    $hasSpecialChar = preg_match('/[\W_]/', $password);

    return $hasNumber && $hasSpecialChar;
}


function verifyNumeric(string $input, int $minLength = 10): bool {
    return is_numeric($input) && strlen($input) > $minLength;
}


function verifyEmailsMatch(string $email1, string $email2): bool {
    return strcmp($email1, $email2) === 0;
}
?>
