<?php

include_once(__DIR__.'/functions.php');

function getUserFile()
{
    $token = $_GET['token'];
    $token_directory = __DIR__ . '/..';
    $token_file_name = 'token.txt';
    $token_file_path = $token_directory . '/' . $token_file_name;
    $token_file_content = file_get_contents($token_file_path);

    $lines = explode("\n", $token_file_content);

    //Find the line contians the user token
    $token_record = null;
    foreach ($lines as $line) {
        if (strpos($line, $token . ':') === 0) {
            $token_record = $line;
            break;
        }
    }

    // If no token record means no data in our db/file for the user. Restrict the access
    if (!$token_record) {
        die('Unauthorized access!');
    }

    //find the file path: right side of :(colon)
    // example value below: 
    // 77735654_1736834059:/var/www/html/data/aehsanshamsafgfgh5258yahoo.com.txt
    $file_path = (explode(":", $token_record));
    $user_file = $file_path[1];
    return $user_file;
}

$user_file = getUserFile();

if (!$user_file) {
    die('Unauthorized access!');
}
