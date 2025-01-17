<?php

$arr = [10, 20, 30, 40, 50, 60];
foreach($arr as $elelmnt) {
    echo $elelmnt . PHP_EOL;
}

echo "<br/>";

$arr = ["name"=>"Hassan","agr"=>23,"height"=>6];
foreach($arr as $key => $val) {
    echo $key. ':' .$val . PHP_EOL;
}