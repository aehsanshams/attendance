<?php

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Specify allowed HTTP methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Specify allowed headers
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

header("Content-Type: application/json");

// If this is a preflight request, exit early
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}


