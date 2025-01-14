<?php 
// declare(strict_types=1); // strict requirement
// function addNumbers(float $a, float $b) : float {
//   return $a + $b;
// }
// echo addNumbers(1.2, 5.2);

// To let a function returning a value, use the return statement.

// function sum($x, $y) {
//     $z = $x+$y;
//     return $z;
// }

// echo "sum of 20+30 = " . sum(20,30) . "<br />";
// echo "sum of 30+30 = " . sum(30,30) . "<br />";
// echo "sum of 40+20 = " . sum(40,20);

// Use a pass-by-reference argument to update a variable:

function addFullName(&$lName) {
   $lName .= " Shams";

}
$fName = "Aehsan";
addFullName($fName);
echo $fName;
?>