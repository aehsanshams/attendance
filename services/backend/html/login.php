<?php
require_once(__DIR__.'/libs/cors.php');
// require_once(__DIR__.'/libs/secured.php');

$input = file_get_contents('php://input');
$input = json_decode($input, true);

$email = $input['email'];
$password = $input['password'];

$directory_path = __DIR__.'/data';
$atTheRate_placeHolder = 'afgfgh5258';
$file_name = str_replace('@', $atTheRate_placeHolder, $email).'.txt';
$file_path = $directory_path.'/'.$file_name;

if (!file_exists($file_path)) 
{
    echo 'User not Registered';
    die();
}

$data = file_get_contents($file_path);

if ($password === $data) 
{
    $token_file_path = __DIR__.'/token.txt';
    $token = rand(10000000, 99999999).'_'.time();
    $val = $token.':'.$file_path;
    file_put_contents($token_file_path, $val);
    echo 'Come again every time with this token:'.$token;
}else {

echo 'Password does not match';
}