<?php
// interface defination
interface Animal {
    public function makeSound();
}

// class defination
class Dog implements Animal {
    public function makeSound() {
        echo "Bark";
    }
}

class Cat implements Animal {
    public function makeSound() {
        echo "Meow";
    }
}

class Mouse implements Animal {
    public function makeSound() {
        echo "Squeak";
    }
}

// create a list of animal
$dog = new Dog();
$cat = new Cat();
$mouse = new Mouse();

$animals = array($dog,$cat,$mouse);

// Tell the animals to make a sound
foreach($animals as $animal) {
    $animal->makeSound();
}