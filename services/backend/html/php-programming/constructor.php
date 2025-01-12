<?php
// example using constructor
class Fruits{
    public $name;
    public $color;

    function __construct($name, $color){
        $this->name = $name;
        $this->color = $color;
    }

    function get_name(){
        return $this->name;
    }
    function get_color(){
        return $this->color;
    }

}

// Object
$banana = new Fruits("Banana","yellow");
echo $banana->get_name();
echo "<br/>";
echo $banana->get_color();

?>