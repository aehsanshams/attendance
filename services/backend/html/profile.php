<?php
require_once(__DIR__.'/cors.php');

$response = ['loggedIn' => false];


//main code


$response = json_encode($response);
echo $response;