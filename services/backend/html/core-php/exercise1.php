<?php

function findSubarrayWithTargetSum($arr, $target)
{
    $left = 0; // Initialize the left pointer of the sliding window
    $currentSum = 0; // Variable to store the current sum of the window

    // Iterate over the array using the right pointer
    for ($right = 0; $right < count($arr); $right++) {
        // Add the current element to the current sum
        $currentSum += $arr[$right];

        // Shrink the window from the left until the current sum is <= target
        while ($currentSum > $target && $left <= $right) {
            $currentSum -= $arr[$left];
            $left++;
        }

        // Check if the current sum matches the target
        if ($currentSum == $target) {
            // Return 1-based indices (convert 0-based to 1-based)
            return [$left + 1, $right + 1];
        }
    }

    // If no subarray is found, return [-1]
    return [-1];
}

// Example usage:
$arr1 = [1, 2, 3, 7, 5];
$target1 = 12;
print_r(findSubarrayWithTargetSum($arr1, $target1)); // Output: [2, 4]

// $arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// $target2 = 15;
// print_r(findSubarrayWithTargetSum($arr2, $target2)); // Output: [1, 5]

// $arr3 = [5, 3, 4];
// $target3 = 2;
// print_r(findSubarrayWithTargetSum($arr3, $target3)); // Output: [-1]
