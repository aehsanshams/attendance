<?php

/**
 * input(array): [key1=>val1, key2=>value2, key_n=>value_n]
 * 
 * output(string):
 * key1:val1\nkey2:value2\nkey_n:value_n
 * 
 */
function arrayToString($array)
{
    $lines = '';
    foreach($array as $key=>$value) {
        $line = $key.':'.$value ."\n";
        $lines = $lines.$line;
    }
    
    return $lines;
}

/**
 * input(string): key1:val1\nkey2:value2\nkey_n:value_n 
 * outpu(array):  [key1=>val1, key2=>value2, key_n=>value_n]
 */
function stringToArray($string)
{
    $lines = explode("\n", $string);
    $result = [];
    foreach ($lines as $line) {
        $lineArray = explode(":", $line);
        if(count($lineArray) !== 2){
            continue;
        }
        $result[$lineArray[0]] = $lineArray[1];
    }

    return $result;
}
