<?php

$token = $_GET['token'];
$token_directory = null;
$token_file_name = null;
$token_file_path = null;
$token_file_content = null;

$user_file = null;


if (!$user_file) {
    die('Unauthorized access!');
}
