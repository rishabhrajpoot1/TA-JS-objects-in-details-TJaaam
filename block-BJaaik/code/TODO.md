## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

```js


class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleeping");
    }
    walk(){
        console.log("Walking");
    }
}

class Player extends Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName = sportsName;
    }
    play(){
        console.log("Playing");
    }
}
class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName = instituteName;
    }
    teach(){
        console.log("Teaching");
    }
} 
class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender);
        this.kind = kind;
    }
    createArt(){
        console.log("Drawing");
    }
}
class Cricketer extends Player{
    constructor(name,age,gender,sportsName,teamName){
        super(name,age,gender,sportsName);
    }
    playCricket(){
        console.log("Playing cricket");
    }
}

let cricketPlayer1 = new Cricketer("sachin",28,"male","cricket","india");
cricketPlayer1//this object will show all the properties of the other classes from which we extended the this class, the methods will be going to their respective dunder proto.

```
