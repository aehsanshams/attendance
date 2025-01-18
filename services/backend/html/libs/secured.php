<?php

include_once(__DIR__.'/functions.php');

function getUserFile()
{
    $token = $_GET['token'];
    // 44403826_1737195554 

    $token_directory = __DIR__ . '/..';
    // services/backend/html

    $token_file_name = 'token.txt';
    // token.txt

    $token_file_path = $token_directory . '/' . $token_file_name;
    // services/backend/html/token.txt

    $token_file_content = file_get_contents($token_file_path);
    // 44403826_1737195554:/var/www/html/data/aehsanshamsafgfgh5258gmail.com.txt

    $tokens = stringToArray($token_file_content);
    // ["token"=>"44403826_1737195554:/var/www/html/data/aehsanshamsafgfgh5258gmail.com.txt"]

    if (array_key_exists($token, $tokens)) {
        $file_path = $tokens[$token];
        return $file_path;
    }

    return null;
}

$user_file = getUserFile();

if (!$user_file) {
    die('Unauthorized access!');
}
