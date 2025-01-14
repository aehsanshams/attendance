<?php

// function along with three parameters
// function number($num1, $num2, $num3) 
// {
//     $product = $num1 * $num2 * $num3;
//     echo "The product is $product";
// }

// // Calling the function
// // Passing three arguments
// number(2, 3, 5);

// function with default parameter
// function nameYear($name, $year = "22") {
//     echo "$name is $year years old <br />";
// }

// // calling the function
// nameYear("Zishan shams", 20);

// // in this call default value 22 considerd
// nameYear("Aehsan Shams");

// pass value
// function passValue($num) {
//     $num += 2;
//     return $num;
// }

// // pass by refference
// function passReff(&$num) {
//     $num += 10;
//     return $num;
// }

// $number = 20;

// passValue($number);
// echo "The original value is still $number \n";
// echo "<br />";
// passReff($number);
// echo "The original value is changes to $number \n";

// Anonymous function

// $sum = function($a, $b) {
//     return $a + $b;
// };
// echo $sum(2,5);

// call by values
function increment($num){
    echo "The initial value is $num <br />";
    $num++;
    echo "This function increments the number by 1 to $num <br />";
}

function decrement($val){
    echo "the initial value is $val <br />";
    $val--;
    echo "this function decrement number by 1 to $val <br />";
}

$x = 10;
increment($x);
echo "Number has not changed $x <br />";

$y = 20;
decrement($y);
echo "Number has not changed $y";
?>