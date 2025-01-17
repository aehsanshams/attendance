<?php

// oneway to write whie loop.
$num = 10;
while($num < 20) {
    echo $num . "\n";
    $num += 2;
}

echo "<br/>";

// another way to while loop 

$num = 10;
while($num < 20):
    echo $num . "\n";
    $num += 2;
endwhile;

