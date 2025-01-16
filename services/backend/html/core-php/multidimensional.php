<?php

// Multidimensional arrays
// ========================= //
// A multidimensional array is an array containing one or more arrays.

// PHP supports multidimensional arrays that are two, three, four, five, or more levels deep. 
// However, arrays more than three levels deep are hard to manage for most people.

$cars = array(
    array("VOLVO", 25, 20),
    array("BMW", 10, 4),
    array("Toyota", 20, 15),
    array("KIA", 15, 10)
);

echo $cars[0][0]. " In Stock " .$cars[0][1]. " Sold " .$cars[0][2]. "<br />";
echo $cars[1][0]. " In Stock " .$cars[1][1]. " Sold " .$cars[1][2]. "<br />";
echo $cars[2][0]. " In Stock " .$cars[2][1]. " Sold " .$cars[2][2]. "<br />";
echo $cars[3][0]. " In Stock " .$cars[3][1]. " Sold " .$cars[3][2]. "<br />";

// using for loop
// 4 row and 3 col

for ($row=0; $row<4; $row++) {
    echo "<p><b>Row number $row</b></p>";
    echo "<ul>";
    for ($col=0; $col<3; $col++) {
        echo "<li>".$cars[$row][$col]."</li>";
    }
    echo "</ul>";
}