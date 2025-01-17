<?php

// Ternery operator

// Syntax:-
// (Condition) ? (Statement1) : (Statement2);

// $age = 20;
// print($age >= 18)? "Adult" : "Not Adult";


// if(isset($_POST['Name']))
//     $name = $_POST['Name'];
// else
//     $name = null;
 
// if(isset($_POST['Age']))
//     $age = $_POST['Age'];
// else
//     $age = null;

//reusable ternary operator

$name = isset($_POST['hassan'])?$_POST['Name']:null; 
$age = isset($_POST['Age'])?$_POST['24']:null; 

$name = "Hassan";
$age = 23;
echo "Name = $name and age = $age";