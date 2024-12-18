<?php


function matchRoute($url, $route)
{
    $pattern = "@^" . preg_replace('/\{[\w]+\}/', '([\w-]+)', $route) . "$@";
    if (preg_match($pattern, $url, $matches)) {
        array_shift($matches); // Supprimer la correspondance complète
        return $matches; // Retourne les paramètres dynamiques
    }
    return false;
}
// Vérifier si la route existe
$routeFound = false;

// Récupérer l'URl demandée et la méthode HTTP
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];
$baseUrl = '/API/Ecole-manager'; 
$url = str_replace($baseUrl, '', $url);
// echo $url;

$routes = [
        
    // Routes pour User Controller
    'POST /users/Log' => ['UserController', 'Login'],
    'GET /users/Dashboard' => ['UserController', 'CheckSession'],
    'POST /users' => ['UserController', 'Signin'],
    'PUT /users/{id}' => ['UserController', 'Put'],
    'DELETE /users/{id}' => ['UserController', 'Delete_user'],

    // Routes pour ElevesController
    'GET /eleves' => ['ElevesController', 'Get_User'],
    // 'GET /eleves' => ['ElevesController', 'Get_User'],
    'POST /eleves/Add' => ['ElevesController', 'Create'],
    'PUT /eleves/Edit/{Matricule}' => ['ElevesController', 'Put'],
    'DELETE /eleves/Remove/{id}' => ['ElevesController', 'Delete_user'],
];

    try {
        foreach ($routes as $route => $action) {
            [$routeMethod, $routePath] = explode(' ', $route, 2);
            if ($method === $routeMethod && ($params = matchRoute($url, $routePath)) !== false) {
                // var_dump($route);
                $routeFound = true;
                
                [$controllerName, $methodName] = $action;
                if (!class_exists($controllerName)) {
                    throw new Exception("Contrôleur introuvable : $controllerName");
                }
                $controller = new $controllerName();
                if (!method_exists($controller, $methodName)) {
                    throw new Exception("Méthode introuvable : $methodName");
                }
                call_user_func_array([$controller, $methodName], $params);
                break;
            }
        }
        
        if (!$routeFound) {
            
            http_response_code(404);
            echo json_encode(["message" => "Route introuvable"]);
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["message" => "Erreur interne : " . $e->getMessage()]);
}



?>