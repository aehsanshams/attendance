<?php


// Note that the size of the array is n-1
function missingNumber($arr)
{

    // Your Code Here
    $n = count($arr) + 1;
    for ($i = 1; $i <= $n; $i++) {
        $found = 0;
        for ($j = 0; $j < $n - 1; $j++) {
            if ($arr[$j] == $i) {
                $found = 1;
            }
        }

        if ($found == 0) {
            return $i;
        }
    }

    return 0;
}
$arr = [1,2,5,6,8];
print_r(missingNumber($arr));
