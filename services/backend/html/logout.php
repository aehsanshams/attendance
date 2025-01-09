<?php
require_once(__DIR__.'/cors.php');

// Remove the token
unset($tokens[$token]);

// Save the updated tokens back to the file
file_put_contents($token_file_path, json_encode($tokens));

echo json_encode(['message' => 'Logout successful']);
?>
