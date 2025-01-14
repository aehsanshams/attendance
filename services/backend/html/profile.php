<?php
require_once(__DIR__.'/libs/cors.php');
require_once(__DIR__.'/libs/secured.php');

$response = ['loggedIn' => false];


//main code


$response = json_encode($response);
echo $response;