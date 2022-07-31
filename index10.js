// //  function
// function myFunction() {

//     console.log("satish is a good boy");
// }
// myFunction();

// // string 
// let carName1 = 'volvo';
// let carName2 = "mercdeze";
// console.log(carName1 + " " + carName2);


// // string method
// let text = 'safjhajfjlkafladhflkjfhadhfldfhlkfhdkl';
// console.log(text.length);

// let str = "Please locate where 'locate' occurs!";
// console.log(str.indexOf("locate"));

// // js number
// let x = 123e5;
// let y = 123e-5;
// console.log(x + " " + y);

// const cars = ["bmw", "benz", "volvo", "tata"];
// console.log(cars);


// const fruits = ["apple", "mango", "banana", "grapes"];
// console.log(fruits.toString);\\\


// Array

// var arr = [10, 20, 30, 40];
// console.log(arr[1]);

// // how to add Element in js

// var dailyActivities = ["bmw", "tata", "volvo"];
// dailyActivities.push('skoda');
// console.log(dailyActivities);

// // this will add the new element 'exercise' at the 2 index

// let dailyActivities1 = ['tata', 'bmw', 'safari'];
// dailyActivities1[1] = 'volvo';
// console.log(dailyActivities1);

//add an element at the start


// const dailyActivities2 = ['pasta', 'pizza', 'pepsi'];
// dailyActivities2.unshift('roti');
// console.log(dailyActivities2.length);

// // this gives the total number of Element in an  Array


// console.log(dailyActivities.length);

// conversation Number

// let result;
// result=4+null;
// console.log(result);

// let result;
// result = '4' + true;
// console.log(result);


// consversation with true false:  


// let result;
// result = '4' + true;
// console.log(result);


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


// break statement
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i == 5)
//         break;
// }


//continue statement

// const n = 8;
// for (let i = 1; i <= 8; i++) {
//     if (i == 4) {
//         continue;
//     }
//     console.log(i);
// }


// // while loop continue/

// let sum = 0;
// const number = 0;
// while (number >= 0) {

//     sum += number;
//     number = parseInt(prompt("enter the number"));
//     if (isNaN(number)) {
//         console.log("you enterd a string");
//         number = 0;
//         continue;
//     }
// }

// function
// function satish() {
//     console.log("hello satish");

// }
// satish();
// satish();
// satish();
// satish();
// satish();


// // add two Number in function

// function add(a, b) {
//     console.log(a + b);

// }
// add(3, 3);
// add(4, 4)


// program to add two numbers
// declaring a function

// function add(a, b) {
//     return a + b;
// }
// let number1 = parseInt(prompt("enter one number");
//         let number2 = parseInt(prompt("enter two number"));

//         let result = add(number1, number2); console.log("the sum of + result");

// objects\\

// const person = {
//     name: 'satish',
//     age: 20,
// }
// console.log(person.name);

// javascript nested object

// const student = {
//     name: "satish",
//     age: 20,
//     mark: {
//         science: 70,
//         math: 80,
//     }
// }
// console.log(student.mark.science);


// JavaScript Object Methods

// const terms = {
//     name: 'ashish',
//     age: 22,

//     greet: function() {
//         console.log('hello')
//     }
// }
// terms.greet();

// JavaScript this Keyword

// const person1 = {
//     name: 'tanisha',
//     greet: function() {
//         console.log(`this name is` + ' ' + this.name);
//     }
// }
// person1.greet();



// const person2 = {
//     name: "satish",
//     age: 20,

//     greet: function() {
//         let surname = "thakur";
//         console.log('this name is' + ' ' + this.name + ' ' + surname);
//     }
// }
// person2.greet();



// array foreach

// let student = ['satish', 'ashish', 'kavita', 'pushpa'];
// student.forEach(myFunction);

// function myFunction(item) {
//     console.log(item);
// }


// let student2 = ['satish', 'ashish', 'anshul'];
// student2.forEach(element => {
//     console.log(element)
// });



// javscript map

// let map = new Map();
// map.set('name', 'satish');
// map.set('age', 20);
// map.forEach(myFunction);

// function myFunction(value, key) {
//     console.log(value + '-' + key)

// }

// // created map

// const map1 = new Map();
// console.log(map1);

// // add element in map 

// const map2 = new Map();
// map2.set('info', { name: 'satish', age: 20 });
// console.log(map2);









// asynch
// function greet() {
//     console.log('hey satish');
// }
// setTimeout(greet, 3000);
// console.log('welcome aa gye');

// // program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// setTimeout(greet, 3000);
// console.log('This message is shown first');


// function showTime() {
//     let dateTime = new Date();
//     let time = dateTime.toLocalTimeString();
//     console.log(time)
//     setTimeout(showTime, 3000);
// }
// showTime();
// program to display time every 3 seconds
// function showTime() {

//     // return new date and time
//     let sateTime = new Date();

//     // returns the current local time
//     let time = sateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
//     setTimeout(showTime, 3000);
// }

// // calling the function
// showTime();
//  create javascript set

// const set = new Set();
// console.log(set);

// const set1 = new Set(['hello', 1, { count: true }]);
// console.log(set1);



// // dublicate value set 


// const set3 = new Set([1, 1, 2, 2, 3, 3]);
// console.log(set3);

// const set2 = new Set([1, 2, 3]);
// console.log(set2.values()); // set iterator [1,2,3]


// // check if element  is in set 

// const set4 = new Set([1, 2, 3]);
// console.log(set4.has(1));

// // add Element

// const set5 = new Set([1, 2]);
// console.log(set.values());
// set.add(3);
// console.log(set.values());

// set.add(1);
// console.log(set.values());



// javascripts arry

// sort array

// var a = ["satish", "rahul", "karan", "ashish"];
// a.sort();
// console.log(a);

// pop array
// pop last value ko delete karta hai 

// var a = ["satish", "rahul", "karan", "ashish"];
// a.pop();
// console.log(a);

// shift array yeh pehle index delete karta hai :

// var a = ["satish", "rahul", "karan", "ashish"];
// a.shift();
// console.log(a);

// unshift array

// var a = ["satish", "rahul", "karan", "ashish"];
// a.unshift("kk", "akshita", "ajay");
// console.log(a);


// push value add karta hai 

// var fruits = ["apple", "banana", "mango", "pineapple"];
// fruits.push("aam", "seb");
// console.log(fruits);

// concat function 
//basically concat work as a merge the value
// var a = ["lenevo", "hp", "dell", "apple"];
// var b = a.concat("asus", "acer");
// var c = a.concat("rahul", "ashu");
// var d = a.concat(b, c);
// console.log(d);

// joins

// const a = ["satish", "yaman", "aman", "kk"];
// let b = a.join(" - ");
// console.log(b)

// slice 
// slice ka work kivasi lue ko nilkana hai.
// var arr = ["rahul", "karan", "satish", "ashish"];
// var arr1 = arr.slice(1, 3);
// console.log(arr1);

// splice function

// splice ka work value ko add karta hai

var arr = ["rahul", "karan", "satish"];
arr.splice(2, 0, "rehmann", "manish");
console.log(arr);

// isArray 

var a = ["satish", "ashish"];
// var a = 10;                   this is for example what this is an arry or not?
var b = Array.isArray(a);
if (Array.isArray(a)) {
    console.log("this is an arry");
} else {
    console.log("this is not an array");
}
console.log(b);

// index of array

var a = ["aman", "salman", "rahul", "kajal"];
var b = a.indexOf("kajal", 0);
console.log(b);
/// yha par ham perametre mai jha se index ka number dalte hai wha se hi wo check kar ke batata hai ki hamara value index kha hai
// var a = ["aman", "salman", "kajal", "rahul", "kajal"];
// var b = a.indexOf("kajal", 1); yha par maine indecx number dala hua hai <===like this 
// console.log(b)

// lastindexof Array
// lastIndexOf ye last index number se value check karna start karta hai

// var a = ["aman", "salman", "rahul", "kajal", "kiran", "hema"];
// var b = a.lastIndexOf("salman", 0);
// console.log(b);

// include  array
var a = ["satish", "ajmal", "akshita", "anakshi"];
var b = a.includes("akshita");
console.log(b)