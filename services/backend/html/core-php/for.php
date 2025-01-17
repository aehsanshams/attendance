<?php

for($num = 0; $num < 50; $num += 5) {
    echo $num . "\n";
}

echo "<br/>";

for($num = 5; $num <= 50; $num += 5) {
    if($num % 5 == 0) {
        echo $num . "\n";
    }
}
