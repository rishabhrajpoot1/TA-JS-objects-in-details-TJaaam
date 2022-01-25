// More About Class

class Square  {
    constructor(side) {
        this.width = side;
        this.height = side;
        this.numberofTimes = 0;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height} `);
    }
    calcArea() {
        return this.height * this.width;
    }
    get area() {
        if(this.numberofTimes >= 4){
             alert("Upper limit reached");
        }
        else {
        this.numberofTimes++;
        return this.height * this.width;
        
        }
    }
    set area(sqArea) {
        if(Number.isInteger(Math.sqrt(sqArea))) {
            this.height = Math.sqrt(sqArea);
            this.width = Math.sqrt(sqArea);
            
        } else {
            alert(`Not a valid Input`);
        }
    }
    static isEqual(sqr1, sqr2) {
        return (sqr1.height * sqr1.width) === (sqr2.height * sqr2.width);
    }
}

let squareA = new Square(14);
let squareB = new Square(10);

console.log(squareA.area);
console.log(squareA.area);
console.log(squareA.area);
console.log(squareA.area);
console.log(squareA.area);

console.log(Square.isEqual(squareA, squareB));


// User Class

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName (fullName) {
        let splitFullName = fullName.split(" ");
        if (fullName.length >= 5) {
            this.firstName = splitFullName[0];
            this.lastName = splitFullName[1]; 
        }
        else {
            alert(`Full name should be more than 5 characters`);
        }
    }
    nameContains(str) {
        if(this.fullName.includes(str)) {
            return true;
        } else {
            return false;
        }
    }
}

let user1 = new User("Arya", "Stark");
let user2 = new User("John", "Snow");

user1.fullName = "Sansa Stark";
user2.fullName = "Bran"; 
console.log(user1.fullName);
console.log(user2.nameContains("now"));