<?php

//Associative Arrays in PHP
// ========================= //
// Associative arrays are used to store key value pairs. 
// For example, to store the marks of different subject of a student 
// in an array, a numerically indexed array would not be the best choice. 
// Instead, we could use the respective subject’s names as the keys in our 
// associative array, and the value would be their respective marks gained.

// Example:
// Here array() function is used to create associative array.

// first method to  create an associative array.

// $studentName_one = array("Math"=>65, "Physics"=>70, "Chemistrey"=>68, "English"=>67, "Hindi"=>75);

// // second method to create associative array

// $studentName_two["Maths"] =  75;
// $studentName_two["Physics"] = 68;
// $studentName_two["Chemistrey"] = 70;
// $studentName_two["English"] = 76;
// $studentName_two["Hindi"] = 65;

// Accessing the elements directly 

// echo "Marks for student one is:\n\n";  
// echo "Maths:" . $studentName_two["Maths"], "\n";
// echo "Physics:" . $studentName_two["Physics"], "\n";
// echo "Chemistrey:" . $studentName_two["Chemistrey"], "\n\n";

// echo "Marks for student one is:\n\n";  
// echo "Chemistrey:" . $studentName_one["Chemistrey"], "\n";
// echo "Hindi:" . $studentName_one["Hindi"], "\n";

// looping through foreach

// echo "looping using foreach: \n\n";
// foreach($studentName_one as $subject => $marks) {
//     echo "Student one got " .$marks. " in " .$subject."\n";
// }

// echo "\nlooping using for: \n\n";
// $subject = array_keys($studentName_two);
// $marks = count($studentName_two);

// for($i=0; $i<$marks; ++$i) {
//     echo $subject[$i] . ' ' . $studentName_two[$subject[$i]] . "\n";
// }

// Array Multi_short 

// Declearing an associative array.
$arr = array(
    array("name"=>"Hassan", "Age"=>23),
    array("name"=>"Zishan", "Age"=>22),
    array("name"=>"salman", "Age"=>18),
    array("name"=>"Nurain", "Age"=>20)
);
// Declearing an array to store names
$names = array();
// Iterating over the array
foreach($arr as $key => $val) {
    // storing the key of the names array as the Name key of the arr
    $names[$key] = $val['name'];
}
array_multisort($names, SORT_ASC, $arr);
print_r("Modified array : ");
print_r($arr);