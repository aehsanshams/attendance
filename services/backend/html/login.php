<?php
require_once(__DIR__.'/libs/cors.php');
// imports all code written in cors.php in login.php only one time. 
// if previously it was imported, it will not get imported again

require_once(__DIR__.'/libs/functions.php');
// imports all code written in function.php in login.php only one time. 
// if previously it was imported, it will not get imported again

$input = file_get_contents('php://input');
// {"email":'aehsanshams@gmail.com',"password":1234}

$input = json_decode($input, true);
// ["email"=>"aehsanshams@gmail.com" "password"=>1234]

$email = $input['email'];
// aehsanshams@gmail.com

$password = $input['password'];
// 1234

$directory_path = __DIR__.'/data';
// services/backend/html/data

$atTheRate_placeHolder = 'afgfgh5258';
// afgfgh5258

$file_name = str_replace('@', $atTheRate_placeHolder, $email).'.txt';
// aehsanshamsafgfgh5258gmail.com
$file_path = $directory_path.'/'.$file_name;
// services/backend/html/data/aehsanshamsafgfgh5258gmail.com.txt

if (!file_exists($file_path)) 
{
// services/backend/html/data/aehsanshamsafgfgh5258gmail.com.txt
// if file_path not exist then below code execute
    echo 'User not Registered';
    die();
}

$data = file_get_contents($file_path);
// name:Aehsan Shams
// email:aehsanshams@gmail.com
// password:12345

$dataArray = stringToArray($data);
// ["name"=>"Aehsan Shams" "email"=>"aehsanshams@gmail.com" "password"=>12345]

$savedPassword = $dataArray['password'];
// 12345

if ($password === $savedPassword)
// if password variable and data variable have same value like 1234, then it goes inside   
{
    $token_file_path = __DIR__.'/token.txt';
// services/backend/html/token.txt

    $token = rand(10000000, 99999999).'_'.time();
// give random number between (10000000, 99999999)- including time if not specified date formate
// eg;- 54987864_1737137428

    $val = $token.':'.$file_path;
    // 54987864_1737137428:services/backend/html/data/aehsanshamsafgfgh5258gmail.com.txt
    
    file_put_contents($token_file_path, $val);
    // it doesn't returns anythings but it writes data given in second param in the file given in first param
    
    echo 'Come again every time with this token:'.$token;
}else {

echo 'Password does not match';
}