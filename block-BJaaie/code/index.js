//- Pseudoclassical Pattern


Animal.prototype = {
    eat() {
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation) {
        return this.location = newLocation;
    },
    summary() {
        return (`I live in ${this.location} and I have ${this.numberOfLegs}`)
    },
}

Dog.prototype = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName(newName) {
        this.name = newName;
    },
    changeColor(newColor) {
        this.colorOfEye = newColor;
    },
    summary() {
        return (`I am ${this.name} and I am of ${this.color} color. I can also bark`)
    }
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);


Cat.prototype = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(newName) {
        this.name = newName;
    },
    changeColor(newColor) {
        this.color = newColor;
    },
    summary() {
        return (`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
    }
}

Object.setPrototypeOf(Cat.prototype, Animal.prototype);



function Animal(location, numberOfLegs) {
    this.location = location;
    this.legs = numberOfLegs;
}


function Dog(location, numberOfLegs, name, color) {
    Animal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.color = color;
}


function Cat(location, numberOfLegs, name, colorOfEye) {
    Animal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.colorOfEye = colorOfEye;
}




//- Class Pattern

class Animal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.legs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`)
    }
    changeLocation(newLocation) {
        return this.location = newLocation;
    }
    summary() {
        return (`I live in ${this.location} and I have ${this.numberOfLegs}`)
    }
}


class Dog extends Animal {
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs);
        this.name = name;
        this.color = color;
    }
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    }
    changeName(newName) {
        this.name = newName;
    }
    changeColor(newColor) {
        this.colorOfEye = newColor;
    }
    summary() {
        return (`I am ${this.name} and I am of ${this.color} color. I can also bark`)
    }
}

class Cat extends Animal {
    constructor(location, numberOfLegs, name, colorOfEye) {
        super(location, numberOfLegs);
        this.name = name;
        this.colorOfEye = colorOfEye;
    }
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(newName) {
        this.name = newName;
    }
    changeColor(newColor) {
        this.color = newColor;
    }
    summary() {
        return (`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
    }
}