
![Notes 1](Notes%201.png)
![Notes2](Notes2.png)
![lec](lec.png)



## Real Go
### Counter
```javascript
const reset = document.getElementById("reset");
const IncreaseB = document.getElementById("IncreaseB");
const DecreaseB = document.getElementById("DecreaseB");
const count = document.getElementById("count");

let counted = 0;

reset.onclick  = function(){
    counted = 0;
    count.textContent = counted;
}

document.getElementById("IncreaseB").onclick  = function(){
  counted += 1;
  count.textContent = counted;

}

DecreaseB.onclick = function(){
  counted -= 1;
  count.textContent = counted;
}
```

### If Else Payments
```javascript
const Subsb = document.getElementById("Subsb");
const Visa = document.getElementById("Visa");
const Master = document.getElementById("Master");
const Paid = document.getElementById("Paid");
const AreUSub = document.getElementById("AreUSub");
const Payment = document.getElementById("Payment");


Paid.onclick = function (){

  if(Subsb.checked){
    AreUSub.textContent = "Subscribed"
  }else{
    AreUSub.textContent = "Not Subscribed"
  }

  if(Visa.checked){
    Payment.textContent = "Visa"
  }else if(Master.checked){
    Payment.textContent = "Master"
  }else if(Palawan.checked){
    Payment.textContent = "Palawan"

  }

}
```


```html
<body>
       <input id="Subsb" type="checkbox" name="card">
       <label for="Subsb">Subscirbe</label><br><br>
       <input type="radio" id="Visa"  name="card">
       <label for="Visa">Visayas</label><br><br>
       <input type="radio" id="Master"  name="card" >
       <label for="Master">MasterCard</label><br><br>
       <input type="radio" id="Palawan"  name="card">
       <label for="Palawan">Palawan Express</label><br><br>

       <button type="submit" id="Paid">Submit</button>

       <p id="AreUSub"></p>
       <p id="Payment"></p>
       <script src="MyScript.js"></script>
   </body>
```

### Method Chaining
```javascript
// Method Chaining = Calling one method after another
//                                    in one continuous line of code.

let username = window.prompt("Enter your username: ");

// ---- NO METHOD CHAINING ----

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);


// ---- METHOD CHAINING ----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
```


### Opertors   
```javascript
//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator
```

### Guessing Game

```javascript
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}
```

### Spread Operator

```javascript
// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                   in to separate elements
//                                  (unpacks the elements)

// ------------ EXAMPLE 1 ------------
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);

// ------------ EXAMPLE 2 ------------
let username = "Bro Code";
let letters = [...username]; 

console.log(letters);
```

### Rest Operator
```javascript
// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array

//                                 spread = expands an array into separate elements
//                                 rest = bundles separate elements into an array

// -------- EXAMPLE 1 --------
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

// -------- EXAMPLE 2 --------
function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const average = getAverage(75, 100, 85, 90, 50);

console.log(average);
```

### CallBacks  
  
```javascript
hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}
```

### Short Cut in Functions or Expressions

```javascript
// function expressions = a way to define functions as
//                                          values or variables

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);
```
  
  
### Arrow Functions

```javascript

// arrow functions = a concise way to write function expressions
//                                good for simple functions that you use only once
//                                (parameters) => some code

// ---------- EXAMPLE 1 ----------
const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old`)};
   
hello("Bro", 25);
  
// ---------- EXAMPLE 2 ----------
setTimeout(() => {console.log("Hello"); 
                  console.log("Goodbye");}, 3000);

// ---------- EXAMPLE 3 ----------               
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total);
let count = 0;

const  Increment = document.getElementById("Increment");

Increment.onclick = () => {
count += 1;
Increment.textContent = count};
```

### Objects

```javascript
// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: () => {console.log("Hi! I am Spongebob!")},
  eat: function(){console.log("I am eating a Krabby Patty")},
}


console.log(person1.firstName);
person1.sayHello();
person1.eat();
```
  
  
### Constructor

```javascript
// constructor = special method for defining the
//                          properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

car1.drive();
car2.drive();
car3.drive();

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
```
  
  
### JavaScript CLOSURES  
  
```javascript

//Example 1

function outer(){
  let mex = "Hello";

  function inner(){
    console.log(mex);
  }

  inner();
}

outer();

//Example 2

function CreateCounter(){
  let count = 0;

  function Increment(){
    count++;
    console.log(`Your Counts is ${count}`);
  }

  function getCount(){
    return count;
  }
  return{Increment ,getCount }; // return the many functions
  return{Increment}; // return the value of the new Count
}

const Counter = CreateCounter();
Counter.Increment();
Counter.Increment();


console.log(Counter.count); // Undefined Because Count is Private
console.log(`Your Current Count is: ${Counter.getCount()}`); // Now Can Access it  
  
  
// Exampke 3  

function PrivateSCore(){

let score = 0;

function increaseScore(points){
  score+= points;
  console.log(`+${points}pts`);
}

function DecreaseScore(points){
  score-= points;
  console.log(`-${points}pts`);
}

function getScore(){
 return score;
}

return{increaseScore, DecreaseScore, getScore};
}


const game = PrivateSCore();
console.log(` Your Score is ${game.getScore()} `);
game.increaseScore(9);
game.increaseScore(8);
console.log(` Your Score is ${game.getScore()} `);
game.DecreaseScore(4);
console.log(` Your Score is ${game.getScore()} `);  
```
  
  
### ES6  
  
```javascript
/ ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update

// --------- index.js ---------

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);

// --------- mathutil.js ---------

export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return 4 * PI * radius * radius;
}
```

### arrow FUNCTIONS
![Arrow Function](Images/arrow%20funmction.png)
![Single Line](Images/Sinkle%20line.png)

### SCOPE VARIABLE 

```javascript
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // Prints "pink"
  }
  console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError
```

Scope refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
Blocks are 
Preview: Docs Loading link description
statements
 that exist within curly braces {}.
Global scope refers to the context within which variables are accessible to every part of the program.
Global variables are variables that exist within global scope.
Block scope refers to the context within which variables are accessible only within the block they are defined.
Local variables are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
Scope pollution is when too many variables exist in a namespace or variable names are reused.
