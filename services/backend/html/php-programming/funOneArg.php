<?php
// function with one argument

// function familySurName($surName) {
//     echo "$surName Shams.<br />";
// }

// familySurName("Aehsan");
// familySurName("Zishan");
// familySurName("salman");
// familySurName("julekha");

// function with two arguments

function familySurName($surName, $year, $height = "6fit") {
    echo "$surName Shams. Born in $year <br /> Height = $height <br />";
    // echo "Height = $height <br />";
}

familySurName("Aehsan", "2001"); // will use the default value of 6fit.
familySurName("Zishan", "2003", '5.8');
familySurName("Julekha", "2005", '5.5');
familySurName("Salman", "2007", '5.7');