<?php

require_once(__DIR__.'/libs/cors.php');

// Define the directory to store JSON files
$dataDir = __DIR__ . '/attendance_data';

// Ensure the data directory exists
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0777, true);
}

// Function to send a JSON response
function sendResponse($status, $message, $attendance_data = null) {
    echo json_encode([
        'status' => $status,
        'message' => $message,
        'attendance_data' => $attendance_data
    ]);
    exit;
}

// Handle GET request: Check clock-in status
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $filePath = $dataDir . '/attendance.json';

    if (file_exists($filePath)) {
        $jsonData = file_get_contents($filePath);
        $attendanceData = json_decode($jsonData, true);

        if (!empty($attendanceData['clockInTime']) && empty($attendanceData['clockOutTime'])) {
            sendResponse('success', 'User is clocked in.', ['isClockedIn' => true]);
        }
    }

    sendResponse('success', 'User is not clocked in.', ['isClockedIn' => false]);
}

// Handle POST request: Save clock-in or clock-out data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        sendResponse('error', 'Invalid JSON data.');
    }

    $filePath = $dataDir . '/attendance.json';
    $attendanceData = [];

    // Load existing data if the file exists
    if (file_exists($filePath)) {
        $jsonData = file_get_contents($filePath);
        $attendanceData = json_decode($jsonData, true) ?? [];
    }

    // Clock-In Request
    if (isset($input['clockInTime'])) {
        if (!empty($attendanceData['clockInTime']) && empty($attendanceData['clockOutTime'])) {
            sendResponse('error', 'User has already clocked in.');
        }

        $attendanceData['clockInTime'] = $input['clockInTime'];
        $attendanceData['clockOutTime'] = null; // Reset clock-out
        file_put_contents($filePath, json_encode($attendanceData, JSON_PRETTY_PRINT));

        sendResponse('success', 'Clock-in time recorded successfully.', $attendanceData);
    }

    // Clock-Out Request
    if (isset($input['clockOutTime'])) {
        if (empty($attendanceData['clockInTime'])) {
            sendResponse('error', 'User has not clocked in.');
        }

        if (!empty($attendanceData['clockOutTime'])) {
            sendResponse('error', 'User has already clocked out.');
        }

        $attendanceData['clockOutTime'] = $input['clockOutTime'];
        file_put_contents($filePath, json_encode($attendanceData, JSON_PRETTY_PRINT));

        sendResponse('success', 'Clock-out time recorded successfully.', $attendanceData);
    }

    sendResponse('error', 'Invalid request.');
}

// Handle other HTTP methods
sendResponse('error', 'Invalid request method.');


?>