<?php

// Data Types in PHP
// ==================== //
// 1. integer :- integer are whole numbers without decimals, 
// which can be negative or positive.

$deci1 = 50; 
$deci2 = 654; 

// octal base integers
$octal1 = 07; 

// hexadecimal base integers
$octal = 0x45; 

$sum = $deci1 + $deci2;
echo $sum;
echo "<br/>";

//returns data type and value
var_dump($sum);
echo "<br/>";
echo "<br/>";

// 2. Doubles: Floats are numbers with decimal points or in exponential form.

$val1 = 50.85; 
$val2 = 654.26; 

$sum = $val1 + $val2;

echo $sum;
echo "<br/>";

//returns data type and value
var_dump($sum);
echo "<br/>";
echo "<br/>";

// 3. NULL: The NULL data type represents a variable with no value.

$nm = NULL;
echo $nm;    // this will return no output

// return data type
var_dump($nm);
echo "<br/>";
echo "<br/>";

// 4. Strings: Strings are sequences of characters, 
// enclosed in single (‘ ‘) or double (” “) quotes.

$name = "Krishna";
echo "The name of the Geek is $name \n";
echo "<br/>";
echo "<br/>";

//returns data type, size and value
var_dump($name);
echo "<br/>";
echo "<br/>";

// 5. Booleans: Booleans represent two possible values: true or false.
if(TRUE)
    echo "This condition is TRUE";
if(FALSE)
    echo "This condition is not TRUE";
    echo "<br/>";
    echo "<br/>";

// 6. Arrays: Arrays are used to store multiple values in a single variable. 
// Arrays can be indexed, associative, or multidimensional.

$intArray = array( 10, 20 , 30);

echo "First Element: $intArray[0] <br/>";
echo "Second Element: $intArray[1] <br/>";
echo "Third Element: $intArray[2] <br/>";

//returns data type and value
var_dump($intArray);
echo "<br/>";
echo "<br/>";

// 7. Objects: Objects are instances of classes, which are templates 
// for creating data structures with properties and methods.

class gfg {
    public $message;

    function __construct($message) {
      $this->message = $message;
    }

    function msg() {
      return "This is an example of " . $this->message . "!";
    }
}

$newObj = new gfg("Object Data Type");
echo $newObj->msg();
echo "<br/>";
var_dump($newObj);

// 8. Resources: Resources are special variables that hold references 
// to external resources, such as database connections or file handles.
