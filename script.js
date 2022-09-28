/*let js = "amazing";
if (js === "amazing") alert("Javascript is fun!");
40 + 8 + 23 - 5;
console.log(40 + 8 + 23 - 5);


let firstName = "matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let $function = "satish";
console.log($function);


let myFirstjob = "coder";
let myCurrentjob = "teacher";
console.log(myFirstjob);
console.log(myCurrentjob);

let PI = "3.14151515";
console.log(PI);

// let talk about boolean;


let JavascriptIsFun = true;
console.log(JavascriptIsFun);
console.log(typeof true);
console.log(typeof JavascriptIsFun);
console.log(typeof "satish");
console.log(typeof 23);

undeifined;
let year
console.log(year);

const birthyYear = 1991;
birthYear = 1990;

// here we dont use any declaration(let, const, var)

lastName = "satish";
console.log(lastName);

/////////basic operator/////////////

const now = 2037;
jonasAge = now - 1991;
sarahaAge = now - 2018;
console.log(jonasAge, sarahaAge);

console.log(jonasAge * 2, sarahaAge / 2, 2 ** 3);



firstName = "Satish";
lastName = "Thakur";
console.log(firstName + ' ' + lastName);





// muultidimensional arrays


var ary = [
    ["satidh", 15, "male", "bca"],
    ["satidh", 15, "male", "bca"],
    ["satidh", 15, "male", "bca"],
    ["satidh", 15, "male", "bca"],
];
console.log(ary);
for (var a = 0; a < 4; a++);
console.log(ary[0] + ' ')


// modify array
var ary = ["satish", 18, "male", "bca"];
console.log(ary);
delete ary[0]; /// delete method in js.
console.log(ary)
ary[0] = "satish"; /// how to add element method.
console.log(ary)

// coding challenge #1


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heihgtJohn = 1.95;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heihgtJohn * heihgtJohn);
console.log(BMIMark, BMIJohn);


//task 2//

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heihgtJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heihgtJohn * heihgtJohn);
const markHeigherBMI = BMIMark > BMIJohn;
console.log(markHeigherBMI);



// built string templetes

const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const satish = "I'm" + firstName + ',a' + (year - birthYear) + 'years old' + job + '!';
console.log(satish);

const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('satish can start drive');
}
const age = 15;
if (age >= 18) {
    console.log('satish can start drive');

} else {
    const yearsLeft = 18 - 15;
    console.log("satish is too young wait another 3 years");
}


const birthYear = 2001;
let century;
if (birthYear <= 2001) {
    century = 21;


} else {
    century = 20;
}
console.log(century);

// type of conversion

const inputYear = '1990';
console.log(Number(inputYear) + 10);
console.log('I am' + ' 23 ' + ' years old ');
console.log('30' + '20' - '10');
console.log('20' * '2');

// string in Number
let n = '1' + 1; // for example  '1' is a string and 1 is number 
n = n - 1;
console.log(n);



// // // Boolean 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('satish'));


// truthy falsy values 5 falsy values== 0, ' ', undeifined, null, NaN    =these are falsy values

                            // example of falsy:
const money = 0;
if (money) {
    console.log("sare kharch mat karo");
} else {
    console.log("sare kharch ho gye");
}


// example of  truthy:

let height = 1.75;
if (height) {
    console.log("your height is perfect");

} else {
    console.log("you need some tips for gain height");
}
*/

//equality values//
// let age = 18;
// if (age === 18) console.log("you just become an adult:D(strict)");
// if (age == 18) console.log("you just become an adult:D(loose)")



// const favrioute = prompt("what's your favrioute number ");
// console.log(favrioute);
// console.log(typeof favrioute);


// if (favrioute == 23) {
//     console.log("cool 23 is amazing number!!");
// } else if (favrioute == 7) {
//     console.log("7 is also cool number");
// } else {
//     console.log('number is not equal 7 or 23');
// }



// logical operator

// const hasDriversLicense = true;
// const hasGoodVision = false;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);


// switch case
// const day = 'wednesday'
// switch (day) {
//     case 'monday':
//         console.log('kab aa rha hai ');
//         break;
//     case 'tuesday':
//         console.log('kab aayega');
//         break;
//     case "wednesday":
//         console.log('kab tak aayega');
//         break;
//     default:
//         console.log('not a valid day');

// }


// if else statement
// if (day === 'monday') {
//     console.log('go to codding meetup');
// } else if (day === 'tuesday') {
//     console.log('hey bhai!')
// } else if (day === 'wednesday') {
//     console.log('hey satish');
// } else if (day === 'thurday') {
//     console.log('hey ashish');
// } else {
//     console.log('not a valid day');
// }



//statement 

// const me = 'jonas';
// if (23 > 21) {
//     console.log("this is true");
// }



//conditional (ternary) operator

// const age = 15;
// age >= 18 ? console.log('I like to drink wine🍷') :
//     console.log('I like to drink water💧');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// if (age >= 10) {
//     drink2 = "wine";
// } else {
//     drink2 = "water"
// }
// console.log(drink2);


// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


// coding challenge
// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



// // // Function


// function satish() {
//     console.log('my name is ashish');

// }

// satish();
// satish();
// satish();
// satish();
// satish();

// //   function decalration 

// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }
// const age1 = calcAge1(1991);
// console.log(age1)


// function experssions

// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;

// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// IF else statement

// const number = prompt("enter the number");
// if (number > 0) {
//     console.log("the number is positive");
// }
// console.log("the if d");

// check
// if the number
// if positive, negative or zero
// const number = prompt("Enter a number: ");


// // check if number is greater than 0
// if (number > 0) {
//     console.log("The number is positive");
// }
// // check if number is 0
// else if (number == 10) {
//     console.log("The number is 0");
// }
// // if number is neither greater than 0, nor zero
// else {
//     console.log("The number is negative");
// }

// console.log("The if...else if...else statement is easy");


// //  for practice

// const number1 = 2;
// if (number1 > 10) {
//     console.log("the number is positive")
// } else {
//     console.log("the number is negative or zero");

// }

// for loop

// const n = 5;
// for (let i = 0; i <= 5; i++) {
//     console.log("i love javascript");

// }


// while loop

// let i = 1,
//     n = 4;
// while (i <= 4) {
//     console.log(i);
//     i += 1;
// }

// // do while

// let a = 1;
// const m = 5;
// do {
//     console.log(i);
//     i += 1;
// } while (i <= 5);

// // break statement
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i == 5)
//         break;
// }



// let sum = 0;
// const number = 0;
// while (number >= 0) {

//     sum += number;
//     number = parseInt(prompt('enter the number'));
//     if (isNaN(number)) {
//         console.log('you enterd a string');
//         number = 0;
//         continue;
//     }
// }
// console.log(`the sum is ${sum}`);


// nested for loop


// let i = 5,
//     j = 8;
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 8; j++) {
//         if (i == 2) {
//             continue;
//         }
//         console.log(`i=${i}, j=${j}`);
//     }

// }


// // switch case 

// const day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("Sunday");
//         break;
//         // case 1:
//         //     day = "Monday";
//         //     break;
//         // case 2:
//         //     day = "Tuesday";
//         //     break;
//         // case 3:
//         //     day = "Wednesday";
//         //     break;
//         // case 4:
//         //     day = "Thursday";
//         //     break;
//         // case 5:
//         //     day = "Friday";
//         //     break;
//         // case 6:
//         //     day = "Saturday";
// }
// console.log("not a valid day");


// function add(a, b) {
//     return a + b;
// }
// let number1 = parseInt(prompt("enter one number");
//         let number2 = parseInt(prompt("enter two number"));

//         let result = add(number1, number2); console.log("the sum of + result");

// global scops
// A variable declared at the top of a program or outside of a function is considered a global scope variable.


// let a = 'hello';

// function satish() {
//     console.log(a);
// }
// satish();

// local scope

// let b = 'hello';

// function greet() {
//     b = 3;
// }
// greet();
// console.log(b);
// greet();

// local scopes

// let c = "hello";
// let d = "world";

// function ashish() {
//     let d = "world";
// }
// console.log(c + " " + d);
// ashish();

// hoisting 
var test;
console.log(test);

// Variable Hoisting
// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.


// a = 5;
// console.log(a)


// var a;
// console.log(a);
// a = 50;

// var a = 7;
// // var b;  there is not define var b
// function greet() {
//     b = "helloworld";
//     console.log(b);
//     var b;

// }
// greet();
// console.log(b);


// function hoisting

// In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.
// greet1();

// function greet1() {
//     console.log('hi, there');
// }





// Recursion is a process of calling itself. A function that calls itself is called a recursive function.

function countDown(number) {
    console.log(number);
    const newNumber = number - 1;
    if (number > 1) {
        countDown(newNumber);
    }
}
countDown(10);





// Recursion 

// program to find the factorial of a number


function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * (x - 1);
    }
}
const num = 3;
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}