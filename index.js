"use strict"
/* The "use strict" directive was new in ECMAScript version 5.
   It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
   The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
   With strict mode, you can not, for example, use undeclared variables.
   All modern browsers support "use strict" except Internet Explorer 9 and lower:*/

// Date and time of the moment.
console.log("Date and time of opening this file: " + (Date()));

// COMMENTS
// This is a comment.

/*
  This is 
  a multiline 
  comment in 
  JavaScript
*/

// OUTPUT
  /* Alerts - this will not show in the console only in the browser 
     when the button Alert! is clicked. If you look at my github page link
     you can see it in action */
  function alertMessage() {
      alert("Hello! I am an alert box!");
  }

// CONSOLE
  /* The console.log() method outputs a message to the web console. 
     The message may be a single string (with optional substitution values), 
     or it may be any one or more JavaScript objects. */
  console.log('Hello world');

// INNER HTML
  /* This manipulation og the DOM with innerHTML can also be seen in action 
     on the Github pages link */
  function innerHtml() {
    document.getElementById("heading").innerHTML = "Hello amazing world!";
  }


// VARIABLE DECLARATIONS
  /* When you declare a variable outside of any function, it is called a global variable, 
     because it is available to any other code in the current document. 
     When you declare a variable within a function, it is called a local variable, 
     because it is available only within that function. */

  // var declares a variable, optionally initializing it to a value.
  var foo = 50; 
  console.log("Declaration using var: " + foo);

  // let declares a block-scoped, local variable, optionally initializing it to a value.
  let foo2 = 200;  
  console.log("Declaration using let: " + foo2);
  foo2 = "twohundred";
  console.log("Declaration foo2 with new assignment: " + foo2);

  // const declares a block-scoped, read-only named constant.
  const myName = "Heba";
  // myName = "Joan"; This will give an error 
  console.log("Declaration using const: My name is " + myName);

// ASSIGNMENT
  // The assignment operation (=) evaluates to the assigned value
  let x = 2;
  const y = 3;

  console.log("x and y: " + (x, y));
  console.log("x = y + 1: " + (x = y + 1));
  console.log("x = x *y: " + (x = x * y));


// NUMBERS 
  /* The Number type is a number between -(2^53 − 1) and 2^53 − 1). 
     In addition to representing floating-point numbers, the number type 
     has three symbolic values: +Infinity, -Infinity, and NaN ("Not a Number"). */
  // operators that can be used on numbers: +, -, *, /, %, ++, --
  let a = 100;
  let b = 50;
  let c = 2;
  let d = 5;
  let add = a + b;
  console.log("addition = " + add); 
  let subtract = a - b;
  console.log("subtraction = " + subtract);
  let multiply = (100 + 50) * a;
  console.log("multipication = " + multiply);
  let divide = b / c;
  console.log("division = " + divide);
  let modulus = c % d; 
  console.log("modulus = " + modulus);


// STRINGS
  /* JavaScript's String type is used to represent textual data.
     Each element in the String occupies a position in the String. 
     The first element is at index 0, the next at index 1, and so on. 
     The length of a String is the number of elements in it. 
     JavaScript strings are immutable. This means that once a string is created, 
     it is not possible to modify it. */
  const string1 = "This here is a string";
  const string2 = "and this is also a string";

  // Interpolation
  console.log("String1: " + string1);
  console.log("String2: " + string2);
  console.log("Concatenation of string1 and string2: " + string1 + " " + string2);

  // Template literals use back-ticks (``) rather than the quotes ("") to define a string:
    // You can use both single and double quotes inside a string:
    let text = `He's often called "Johnny"`;
    
    // Template literals allows multiline strings:
    let longText =
      `The quick
      brown fox
      jumps over
      the lazy dog`;
  
    // Template literals provide an easy way to interpolate variables and expressions into strings and allow variables in strings:
    let firstName = "John";
    let lastName = "Doe";

    let iplText = `Welcome ${firstName}, ${lastName}!`;
    console.log("Interpolate variable in string: " + iplText);

// BOOLEANS
  // Boolean represents a logical entity and can have two values: true and false.
  // You can use the Boolean() function to find out if an expression (or a variable) is true:
  Boolean(10 > 9);
  console.log("Boolean(10 > 9): " + (Boolean(10 > 9)));
  // or easier
  console.log("10 > 9: " + (10 > 9));

  // Everything With a "Value" is True
  let value1 = 100;           console.log("Value1: " + Boolean(value1));
  let value2 = 3.14;          console.log("value2: " + Boolean(value2));
  let value3 = -15;           console.log("value3: " + Boolean(value3));
  let value4 = "Hello";       console.log("value4: " + Boolean(value4));
  let value5 = true;          console.log("value5: " + Boolean(value5));
  let value6 = 7 + 1 + 3.14;  console.log("value6: " + Boolean(value6));

  // Everything Without a "Value" is False
  let noValue1 = 0;           console.log("noValue1: " + Boolean(noValue1));
  let noValue2 = -0;          console.log("noValue2: " + Boolean(noValue2));
  let noValue3 = "";          console.log("noValue3: " + Boolean(noValue3));
  let noValue5 = null;        console.log("noValue5: " + Boolean(noValue5));
  let noValue6 = false;       console.log("noValue6: " + Boolean(noValue6));

  // If/Else 
    /* The if statement is probably one of the most frequently used statements in JavaScript. 
       The if statement executes a statement or block of code if a condition is satisfied. */
    // if( condition ) { statement; }
    // ===	equal to	if (day === "Monday")
    // >	greater than	if (salary > 9000)
    // <	less than	if (age < 18)
    let ifElse = 25;
    if( ifElse > 10 ) {
      console.log('x is greater than 10');
    }

    let ifElseA = 10, 
    ifElseB = 20;
    if (ifElseA > ifElseB) {
        console.log('A is greater than B');
    } else if (ifElseA < ifElseB) {
        console.log('A is less than B');
    } else {
        console.log('A is equal to B');
    }
    

// ARRAYS
  /* Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. 
  Neither the length of a JavaScript array nor the types of its elements are fixed. */
  let fruits = ['Apple', 'Banana', 'Kiwi', 'Watermelon'];
  console.log("Fruit array length: " + fruits.length);

  // Index position
  let firstFruit = fruits[0];
  let lastFruit = fruits[fruits.length - 1];
  console.log("First fruit: " + firstFruit);
  console.log("Last fruit: " + lastFruit);

  // Loop over array
  fruits.forEach(function(item, index, array) {
    console.log("Item:" + item, "Index:" + index);
  })

  // Add an item to the end of an Array
  let newLength = fruits.push('Orange');
  console.log("Add item to end of Array: " + fruits);

  // Remove an item from the end of an Array
  let last = fruits.pop();
  console.log("Remove item from Array: " + fruits);

  // Remove an item from the beginning of an Array
  let first = fruits.shift();
  console.log("Remove item from beginning of Array: " + fruits);

  // Add an item to the beginning of an Array
  let newLength2 = fruits.unshift('Strawberry');
  console.log("Add item to beginning of Array: " + fruits);

  // Find the index of an item in the Array
  fruits.push('Mango');
  console.log("Add item to Array: " + fruits);
  let fruitPos = fruits.indexOf('Banana');
  console.log("Find position of Banana: " + fruitPos);

  // Remove an item by index position
  let removedItem = fruits.splice(fruitPos, 1);
  console.log("Remove item by index position: " + removedItem);

  // Copy an Array
  let shallowCopy = fruits.slice();
  console.log("Copy of an Array: " + shallowCopy)


// OBJECTS
  // Object literal syntax uses the {…} notation to initialize an object an its methods/properties directly.
  let obj = {
    cat: 'meow',
    dog: 'woof'
  };

  // Dot notation is used to access properties on an object
  let sound = obj.cat;
  console.log("Sound of object.cat: " + sound);

  /* The destructuring assignment syntax is a JavaScript expression that makes it possible 
     to unpack values from arrays, or properties from objects,into distinct variables. */
  let ab, cd, rest;

  [ab, cd] = [10, 20];
  console.log("ab = " + ab);
  console.log("cd = " + cd);

  [ab, cd, ...rest] = [10, 20, 30, 40, 50];
  console.log("ab = " + ab);
  console.log("cd = " + cd);
  console.log("rest = " + rest);


// NULL / UNDEFINED / NAN
  // The Null type has exactly one value: null.
  /* The value null represents the intentional absence of any object value. 
     It is one of JavaScript's primitive values and is treated as falsy for boolean operations. */
  // null == false gives us false.
  console.log(null == false);

  // A variable that has not been assigned a value has the value undefined.
  var undefinedVariable;
  console.log("var a; = " + undefinedVariable)
  
  // The global NaN property is a value representing Not-A-Number. 
  // JavaScript returns this value when the number we’re supposed to get isn’t a number.
  const cucumber = "cucumber";
  console.log("cucumber - 10 = " + (cucumber - 10));


// MATH (random, round, floor)
  // The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1
  console.log("Math.random: " + (Math.random()));

  // The Math.round() function returns the value of a number rounded to the nearest integer.
  console.log("Math.round(20.49): " + (Math.round(20.49)));
  console.log("Math.round(20.5): " + (Math.round(20.5)));
  console.log("Math.round(42): " + (Math.round(42)));
  console.log("Math.round(-20.5): " + (Math.round(-20.5)));
  console.log("Math.round(-20.51): " + (Math.round(-20.51)));

  // The Math.floor() function returns the largest integer less than or equal to a given number.
  console.log("Math.floor(45.95): " + (Math.floor(45.95)));
  console.log("Math.floor(45.05): " + (Math.floor(45.05)));
  console.log("Math.floor(4): " + (Math.floor(4)));
  console.log("Math.floor(-45.05): " + (Math.floor(-45.05)));
  console.log("Math.floor(-45.95): " + (Math.floor(-45.95)));

// DATES (Set, Get, Format)
  /* JavaScript Date objects represent a single moment in time in a platform-independent format. 
     Date objects contain a Number that represents milliseconds since 1 January 1970 UTC. */
  console.log("Date now: " + (Date()));
  console.log("New Date: " + (new Date()));
  
  const myDate = new Date();
  
  // The setDate() method sets the day of a date object (1-31):
  console.log("setDate(15): " + (myDate.setDate(15)));
  
  // it can also be used to add days to a date:
  console.log("setDate.getDate() + 50: " + (myDate.setDate(myDate.getDate() + 50)));
  // setDate()	        Set the day as a number (1-31)
  // setFullYear()	    Set the year (optionally month and day)
  // setHours()	        Set the hour (0-23)
  // setMilliseconds()	Set the milliseconds (0-999)
  // setMinutes()	      Set the minutes (0-59)
  // setMonth()	        Set the month (0-11)
  // setSeconds()	      Set the seconds (0-59)
  // setTime()	        Set the time (milliseconds since January 1, 1970)

  // The getDate() method returns the day of a date as a number (1-31):
  console.log("getDate(): " + (myDate.getDate()));
  // getFullYear()	    Get the year as a four digit number (yyyy)
  // getMonth()	        Get the month as a number (0-11)
  // getDate()	        Get the day as a number (1-31)
  // getHours()	        Get the hour (0-23)
  // getMinutes()	      Get the minute (0-59)
  // getSeconds()	      Get the second (0-59)
  // getMilliseconds()	Get the millisecond (0-999)
  // getTime()	        Get the time (milliseconds since January 1, 1970)
  // getDay()	          Get the weekday as a number (0-6)
  // Date.now()	        Get the time. ECMAScript 5.