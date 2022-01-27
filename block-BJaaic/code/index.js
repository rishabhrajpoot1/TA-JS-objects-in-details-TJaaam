// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

let animalMethods = {
    eat: function () {
      console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function (newLocation) {
      this.location = newLocation;
      return this.location;
    },
    summary: function () {
      console.log(
        `I live in ${this.location} and I have ${(this, numberOfLegs)}`
      );
    },
  };
  
  function createAnimal(location, numberOfLegs) {
    let obj = Object.create(animalMethods);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
  }
  
  // #### Dog
  
  // It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.
  
  // Properties:
  
  // - `name`
  // - `color`
  
  // Methods:
  
  // - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
  // - `changeName(newName)` - accepts the name property and updates the name of the dog
  // - `changeColor(newColor)` - accepts the new color and updates the color of the dog
  // - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`
  
  function createDogs(location, numberOfLegs, name, color) {
    let obj = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(obj, dogsMethods);
    obj.name = name;
    obj.color = color;
    return obj;
  }
  
  let dogsMethods = {
    bark() {
      alert(`I am ${this.name} and I can bark 🐶
         `);
    },
    changeName(name) {
      this.name = name;
      return this.name;
    },
    changeColor(newColor) {
      this.color = newColor;
      return this.color;
    },
    summary() {
      return `I am ${name} and I am of ${color} color. I can also bark`;
    },
  };
  
  Object.setPrototypeOf(dogsMethods, animalMethods);
  
  // #### Cat
  
  // It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.
  
  // Properties:
  
  // - `name`
  // - `colorOfEyes`
  
  // Methods:
  
  // - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`
  
  // - `changeName(newName)` - accepts the name property and updates the name of the dog
  
  // - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog
  
  // - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
  
  function createCats(location, numberOfLegs, name, colorOfEyes) {
    let obj = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(obj, dogsMethods);
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;
    return obj;
  }
  
  let CatsMethods = {
    meow() {
      alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(name) {
      this.name = name;
      return this.name;
    },
    changeColorOfEyes(newColor) {
      this.colorOfEyes = newColor;
      return this.colorOfEyes;
    },
    summary() {
      return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    },
  };
  
  Object.setPrototypeOf(CatsMethods, animalMethods);