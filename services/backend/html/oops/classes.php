<?php
class Fruit{
    // properties
    public $name;
    public $color;

    // method
    function set_name($name){
        $this->name = $name;
    }

    function get_name(){
        return $this->name;
    }

    function set_color($color){
        $this->color = $color;
    }

    function get_color(){
        return $this->color;
    }
}

// create Object
$apple = new Fruit();
$apple->set_name("apple");
$apple->set_color("red");

echo "name = " . $apple->get_name();
echo "<br />";
echo "color = " . $apple->get_color();