<?php
require_once(__DIR__.'/libs/cors.php');
require_once(__DIR__.'/libs/secured.php');
require_once(__DIR__.'/libs/functions.php');

$response = ['loggedIn' => true];


//main code
$userFile = getUserFile();
$user_content_str = file_get_contents($userFile);
$user_content_arr = stringToArray($user_content_str);

$response['name'] = $user_content_arr['name'];


$response = json_encode($response);
echo $response;