## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello John
console.log(user2.sayHello()); // Hello Arya 
console.log(user.sayHello.call(user2)); // Hello Arya 
console.log(user.sayHello.call(user2, 'Hey')); //Hey Arya
console.log(user.sayHello.apply(user2, ['Hey'])); //Hey Arya
console.log(typeof user.sayHello.bind(user2)); // function
console.log(user.sayHello.bind(user2)()); // Hello Arya
console.log(userSayHello()); //Hello undefined
// userSayHello is not having anything on the left side, so it will print username as undefined.
console.log(typeof userSayHello.bind(user2)); //function
console.log(userSayHello.bind(user2)()); // Hello Arya
console.log(user3.sayHello()); // Type error user3.sayHello is not a function.
console.log(userSayHello.apply(user3)); //Hello Bran
console.log(userSayHello.call(user3)); // Hello Bran
console.log(typeof new MainUser()); // object
//new will create an new instance from the constructor function.
console.log(new MainUser().sayHello()); //Hello Tyrion
console.log(new MainUser().sayHello.call(user2)); //Hello Arya
console.log(new MainUser().sayHello.call(user)); // Hello John
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // Welcome! John
```
