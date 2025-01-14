<?php
// A function that do not know how many arguments it will get:
// function sumOfMyNumbers(...$x) {
//     $n = 0;
//     $len = count($x);
//     for($i=0; $i<$len; $i++) {
//         $n += $x[$i]; 
//     }
//     return $n;
// }
// $a = sumOfMyNumbers(4,6,6,8,4);
// echo $a;

// The variadic argument must be the last argument:

function myFamily($lastname, ...$firstName) {
    $txt = "";
    $len = count($firstName);
    for($i=0; $i<$len; $i++) {
        $txt = $txt. "Hi, $firstName[$i] $lastname .<br/>";
    }
    return $txt;
}
$fullName = myFamily("Shams","Aehsan","zishan","salman","julekha");
echo $fullName;