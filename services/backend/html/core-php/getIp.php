<?php

// Check if the IP is from shared internet
// if(!empty($_SERVER['HTTP_CLIENT_IP']))
// {
//     $ip_address =  $_SERVER['HTTP_CLIENT_IP'];
// }
// // Check if the IP is from a proxy
// elseif(!empty($_SERVER['HTTP_X_FORWORDED_FOR']))
// {
//     $ip_address = $_SERVER['HTTP_X_FORWORDED_FOR'];
// }
// // If not from shared internet or proxy, consider it as the remote address
// else
// {
//     $ip_address = $_SERVER['REMOTE_ADDR'];
// }
// // Display the determined IP address
// echo $ip_address;

// echo "Your User Agent is :" . $_SERVER['HTTP_USER_AGENT'];

// Get the base name of the currently executing PHP script file
$current_file_name = basename($_SERVER['PHP_SELF']);
// Display the current file name followed by a newline character
echo $current_file_name . "\n";
