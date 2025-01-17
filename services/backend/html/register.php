<?php
require_once(__DIR__.'/libs/cors.php');
// require_once(__DIR__.'/libs/secured.php');
require_once(__DIR__.'/libs/functions.php');

$input = file_get_contents('php://input');
// {"name":"Aehsan Shams","email":"aehsanshams@gmail.com","password":"1234"}

$input = json_decode($input, true);
// ["name"=>"Aehsan shams" "email"=>"aehsanshams@gmail.com" "password"=>1234]

$name = $input['name'];
// Aehsan shams
$email = $input['email'];
// aehsanshams@gmail.com
$password = $input['password'];
// 1234

$directory_path = __DIR__.'/data';
// services/backend/html/data
$atTheRate_placeHolder = 'afgfgh5258';
// afgfgh5258
$file_name = str_replace('@', $atTheRate_placeHolder, $email).'.txt';
// aehsanshamsafgfgh5258gmail.com.txt
$file_path = $directory_path.'/'.$file_name;
// services/backend/html/data/aehsanshamsafgfgh5258gmail.com.txt
if (file_exists($file_path)) 
// services/backend/html/data/aehsanshamsafgfgh5258gmail.com.txt
// exists
{
    echo 'Already Registered';
    die();
}
$contents = arrayToString($input);
//name:aehsan shams\nemail:aehsanshams@gmail.com\npassword:1234

file_put_contents($file_path, $contents);

echo 'Registration Successful';
