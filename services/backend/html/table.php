<?php
$table = 2;
$table_values =[];
for($i=1; $i<=10; $i++)   
{   
//   echo $i*$table;   
//   echo '<br>';  
  $table_values[] =    $i*$table; 
} 

// var_dump($table_values);

foreach($table_values as $value)
{
    echo ($value);
    echo '<br>';
}
