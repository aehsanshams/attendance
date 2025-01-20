<?php

$json_data = '{"Student": [{"Name": "Sravan","Roll": 7058,"subject": "java"},
{"Name": "Jyothika","Roll": 7059,"subject": "SAP"}]}';

// Read the JSON file
$json = file_get_contents($json_data);

// Check if the file was read successfully
if ($json === false) {
    die('Error reading the JSON file');
}

// Decode the JSON file
$json_my_data = json_decode($json, true);

// Check if the JSON was decoded successfully
if ($json_my_data === null) {
    die('Error decoding the JSON file');
}

// Display data
echo "<pre>";
print_r($json_my_data);
echo "</pre>";
