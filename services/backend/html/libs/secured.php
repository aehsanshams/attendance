<?php

/**
 * input(array): [key1=>val1, key2=>value2, key_n=>value_n]
 * 
 * output(string):
 * key1:val1\nkey2:value2\nkey_n:value_n
 * 
 */
function arrayToString($array)
{
    $lines = '';
    foreach($array as $key=>$value) {
        $line = $key.':'.$value ."\n";
        $lines = $lines.$line;
    }
    
    return $lines;
}

/**
 * input(string): key1:val1\nkey2:value2\nkey_n:value_n 
 * outpu(array):  [key1=>val1, key2=>value2, key_n=>value_n]
 */
function stringToArray($string)
{
    $lines = explode("\n", $string);
    $result = [];
    foreach ($lines as $line) {
        list($key, $value) = explode(":", $line);
        $result[$key] = $value;
    }

    return $result;
}
$result = "key1:val1\nkey2:value2\nkey_n:value_n";
var_dump($result);
die();

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
