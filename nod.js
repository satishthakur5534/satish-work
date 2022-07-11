 // while loop 
 //  var a = 1;
 //  while (a <= 10) { // condition
 //      console.log(a + ")hello satish");
 //      a = a + 1; // increment  ( decrement a = a - 1;)
 //  }

 // Do while loop 
 // var a = 1;
 // do {
 //     console.log("hello satish");
 //     a++;
 // } while (a <= 10)


 // For loop 
 // for (var a = 1; a <= 10; a++) {
 //     console.log("hey satish")
 // }

 // continue statement    

 //  for (var a = 1; a <= 10; a++) {
 //      if (a == 3) {
 //          console.log("hey : " + a + "")
 //          continue;
 //      }
 //      console.log("number : " + a + "");
 //  }



 // break statement this is also work as continue statement:

 // for (var a = 1; a <= 10; a++) {
 //     if (a == 3) {
 //         console.log("hey : " + a + "")
 //         break;
 //     }
 //     console.log("number : " + a + "");
 // }


 //  odd / even  number with loop in javascript

 //  for (var a = 1; a <= 100; a++)
 //      if (a % 2 == 0) {
 //          console.log(a)
 //      }

 // Here we can also use the odd number where the condition will be (a 2%!=0)   /// This condition is applicable only for odd.


 //Nested loop syntax in  javascript.    nested loop mostly data row column waali data find karne kai liye karte hai.
 //  for (var a = 1; a <= 100; a = a + 10) {
 //      for (var b = a; b < a + 10; b++) {
 //          console.log(b);
 //      }

 //      console.log("<br>")
 //  }

 // nested loop 2nd parts
 //  var a = 1;
 //  for (a = 1; a <= 5; a++) {
 //      for (b = 1; b <= a; b++) {
 //          console.log(a + " ");
 //      }
 //      console.log("<br>");
 //  }
 //  for example :- 1 
 //    1 2  this is only for example the main code is upper 
 //    1 2  3
 //    1 2  3 4
 //    1 2  3 4 5

 //  for (var a = 1; a <= 5; a++) {                 nested loop
 //      for (var b = 1; b <= a; b++) {

 //      }
 //  }
 //  var a = 5;      for example (practice)
 //  var b = 5;
 //  console.log(a + b);



 // Array in javascript 

 // array main index ki first value hamesha 0 se start hoti hai
 //  var array = [10, 20, 30, 40, 50];
 //  var sum = 0;
 //  for (var a = 0; a <= 4; a++) {
 //      sum = sum + array[a];
 //      console.log(array[a]);
 //  }
 //  console.log("total sum:" + sum);

 // array method how to create a array

 var arr = new array();
 for (var g = 0; g < 3; g++) {

     var sum = 0;
     for (var a = 0; a <= 4; a++) {
         sum = sum + arr[a];
         console.log(arr[a]);
     }
     console.log("total sum:" + sum)
 }