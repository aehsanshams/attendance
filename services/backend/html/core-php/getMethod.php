<?php
error_reporting(0);
$name = $_GET['name'];
$email = $_GET['email'];

if($name || $email) {
    echo "Name is = $name and <br/>";
    echo "Email is $email";
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTTP GET Method</title>
</head>
<body>
    <h3>This Example is HTTP GET Method</h3>
    <form action="<?php $_PHP_SELF ?>" method="GET">
        Name : <input type="text" name="name" /><br><br>
        Email : <input type="email" name="email" /><br><br>
        <input type="submit" />
    </form>
</body>
</html>
