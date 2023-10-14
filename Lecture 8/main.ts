// Topic Function

// Named Function

// function Sum(a:number, b: number) : number {
//     return a + b ;
// };

// Sum(1, 2);
//  console.log(Sum(1, 2))


 // Anonomyous Function

//  let Sum = function(num1:number, num2: number ): number {
//     return num1 + num2
//  } ;

// Sum(1, 2);


//  Boolean shows -1 and other number in positive and negative consider true
// Boolean ([].length) // false
// Boolean ("") /// false
// Boolean ("232") // true
// Boolean (12) // true
// Boolean (-1) // true

// Expilicit Function

//        type of function 
// let Sum: (num1:number, num2:number) => number = 
// function (num1: number, num2 : number): number {
//     return num1 + num2 ;
// };

// function name( c: () => void){};

// name (function () {});

// Arrow function or Lamba function
// It is a anonymous and arrow function and it always be anonymous 

// () => {}

// let Sum = () => {}

// let Sum = (a: number): void => {};
// Sum(1);


// call back function
// function greeter(fn: (message: string) => void) {
//  fn("hello");
// }

// function abc(message:string) {
// console.log(message);
// };

// greeter(abc);
// abc("Uzair");

// /// Topic Function - Optional Parameter

// // Contact type is Number or undefined becuase if user does not provide us input then it will be un-defined
// function abc (name: string, age: number, contact?: number){
//     if (contact){
//         console.log(contact);
//     }
//     else {
//         console.log("no contact number")
//     }
// };

// abc("okasha", 23);

// function abc(name:string, age: number, address = "xyz"){
//     console.log(name, age, address);
// }
// abc("Uzair", 23, "Karachi");
// abc ("Uzair", 23);

// // Rest Parameter
// //                                    rest parameter and it outcomes in [] Array 
// function calculate(operator:string, ...numbers: number[]){
//     // console.log(operator, numbers);
// let sum = 0;
// for(let i=0; i < numbers.length; i++){
// sum = sum + numbers [i];
// }
// return sum
// };

// console.log(calculate("+", 10, 20, 30, 40));

// // Topic Fixed Array
// // Only assignable array can be come in array

// let a  : [1, 2, 3, 4] = [ 1, 2, 3, 4 ];

// a.push(55);

// const notfound:["404", "Not found"] = ["404", "Not found"] ;





























