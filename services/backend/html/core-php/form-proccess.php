<?php
if(isset($_POST['submit'])) 
{
    if((!isset($_POST['firstname'])) || (!isset($_POST['lastname'])) || 
    (!isset($_POST['adress'])) || (!isset($_POST['emailaddress']))) 
    {
        $error = "*" . "All fields are required";
    }
    else
    {
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $address = $_POST['address'];
        $emailaddress = $_POST['emailaddress'];
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Proccess</title>
</head>

<style>
    input{
        display: flex;
        
    }
</style>
<body>
    <h1>Form Processing using PHP</h1> 
    <fieldset>
    <form action="$_PHP_SELF" method="post">
        First Nmae : <input type="text" name="firstname" required/>
        <br>
        <br>
        Last Name : <input type="text" name="lastname" required/>
        <br>
        <br>
        Address : <input type="text" name="address" required/>
        <br>
        <br>
        Eamil : <input type="text" name="email" required/>
        <br>
        <br>
        Password : <input type="password" name="password" required/>
        <br>
        <br>
        Gender : <input type="radio" value="male" name="gender" required/>Male
                 <input type="radio" value="male" name="gender" required/>female
        <br>
        <br>
        <input type="submit" value="Submit" name="submit"/>
    </form>
    </fieldset>
</body>
</html>