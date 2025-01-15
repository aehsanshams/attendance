<?php

// PHP Variables
// ==================== //
// PHP Variables are one of the most fundamental concepts in programming. 
// It is used to store data that can be accessed and manipulated within your code. 
// $name = "XYZ";        // String
// $age = 30;            // Integer
// $salary = 45000.50;   // Float
// $isEmployed = true;   // Boolean

// PHP Variable Scope
// ==================== //
// The scope of a variable refers to where it can be accessed within the code. 
// PHP variables can have local, global, static, or superglobal scope.

// 1. Local Scope or Local Variable
// ===================================== //
// Variables declared within a function have local scope and cannot be 
// accessed outside the function. Any declaration of a variable outside the
// function with the same name (as within the function) is a completely different variable.

// Example:  This example shows the local variable in PHP.

$num = 60;

function local_var()
{
    // The variable $num outside the function
    // is a completely different

    // this $num variable is local to this function
    $num = 50;
    echo "Variable num inside function is = $num \n";
}
local_var();

// The $num outside function is a completely 
// different from inside local_var()
echo "Variable num outside function is = $num \n";

// 2. Global Scope or Global Variable
// ===================================== //

$num = 40;

function global_var()
{
    // We have to use global keyword before 
    // the variable $num to access within 
    // the function
    global $num;
    echo "Variable num inside function = $num \n";
}
global_var();

echo "Variable num outside the function = $num \n";

// 3. Static Variables
// ====================== //
// It is the characteristic of PHP to delete the variable. 
// Once it completes its execution and the memory is freed. 
// But sometimes we need to store the variables even after 
// the completion of function execution. To do this, we use 
// the static keywords and the variables are then called static variables. 
// PHP associates a data type depending on the value for the variable.

// Example: This example shows the Static variable in PHP.

function static_var()
{
    // static variable
    static $num = 5;
    // normal variable
    $sum = 8;

    // incremnet to check whom memory is freed and delete the variable 
    $num++;
    $sum++;

    echo $num, "\n";
    echo $sum, "\n";
}
// firt time function call
static_var();

// second time function call
static_var();

// 4. Superglobals
// ================== //
// Superglobals are built-in arrays in PHP that are accessible 
// from anywhere in the script, including within functions. 
// Common superglobals include $_GET, $_POST, $_SESSION, $_COOKIE, $_SERVER, and $_GLOBALS.

// Using $_SERVER superglobal to
// get server information
echo $_SERVER['SERVER_NAME'];
