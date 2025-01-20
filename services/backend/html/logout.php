<?php
require_once(__DIR__.'/libs/cors.php');
require_once(__DIR__.'/libs/secured.php');

$token_file_path = __DIR__.'/token.txt';

if (file_exists($token_file_path)) {
    unlink($token_file_path); // Deletes the token file
    echo 'Logged out successfully';
} else {
    echo 'No active session found';
}

