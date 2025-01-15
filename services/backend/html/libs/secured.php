<?php

include_once(__DIR__.'/functions.php');

function getUserFile()
{
    $token = $_GET['token'];
    $token_directory = __DIR__ . '/..';
    $token_file_name = 'token.txt';
    $token_file_path = $token_directory . '/' . $token_file_name;
    $token_file_content = file_get_contents($token_file_path);

    $tokens = stringToArray($token_file_content);

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
