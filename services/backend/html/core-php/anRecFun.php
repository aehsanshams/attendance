<?php

$factorial = function($num) use (&$factorial)
{
    // Base condition of recursion
    if($num == 1)
        return 1;

    // return statement when $n is not equals to 1.    
    return $factorial($num - 1) * $num;
};
// function call
print $factorial(5);


