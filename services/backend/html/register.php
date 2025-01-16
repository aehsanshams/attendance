<?php
require_once(__DIR__.'/libs/cors.php');
// require_once(__DIR__.'/libs/secured.php');

$input = file_get_contents('php://input');
$input = json_decode($input, true);

$name = $input['name'];
$email = $input['email'];
$password = $input['password'];

$directory_path = __DIR__.'/data';
$atTheRate_placeHolder = 'afgfgh5258';
$file_name = str_replace('@', $atTheRate_placeHolder, $email).'.txt';
$file_path = $directory_path.'/'.$file_name;
if (file_exists($file_path)) 
{
    echo 'Already Registered';
    die();
}

file_put_contents($file_path, $email);

echo 'Registration Successful';
