// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

function createUser (name, age) {
    let user = {};
    user.name = name;
    user.age = age;
    return user;
}


// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

function createUser (name, age) {
    let user = {};
    user.name = name;
    user.age = age;
    user.sayHello = function () {
        alert(`Welcome ${user.name}`);
    }
    return user;
}


// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let personOne = createUser("John", 26);

let personTwo = createUser("Miller", 24);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

let userMethods = {
    sayHello: function () {
        alert(`Welcome ${this.name}`);
    },
}

function createUser (name, age) {
    let user = Object.create(userMethods);
    user.name = name;
    user.age = age;
    return user;
}

let personThree = createUser("John", 26);

let personFour = createUser("Miller", 24);

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function CreateUser (name, age) {
    this.name = name;
    this.age = age;
}
CreateUser.prototype = {
    sayHello: function () {
        alert(`Welcome ${this.name}`);
    }
}

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

 personOne = new CreateUser("John", 26);

 personTwo = new CreateUser("Miller", 24);

// 7. Try calling `personOne.sayH ello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello(); //Welcome Jack
personTwo.sayHello(); //Welcome Kate

// 8. Convert the `createUser` function into `User` class.

class User  {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        alert(`Welcome ${this.name}`);
    }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

personOne = new User("Arya", 16);

personTwo = new User("Bran", 16);

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello(); //Welcome Jack
personTwo.sayHello(); //Welcome Kate