<?php

$email = $_POST['email'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirm_password'];

$directory_path = __DIR__.'/data';
$atTheRate_placeHolder = 'afgfgh5258';
$file_name = str_replace('@', $atTheRate_placeHolder, $email).'.txt';
$file_path = $directory_path.'/'.$file_name;

if (file_exists($file_path)) 
{
    echo 'Already Registered';
    die();
}

file_put_contents($file_path, $password);

echo 'Registration Successfyl';
