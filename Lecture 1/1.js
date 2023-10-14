// let a ;
// let b = "Uzair";
// console.log(a);
// document.write(a);

// a= 3;
// console.log(a);
// document.write(a);

// let c=3;
// let d=4;

// c=6;

// let sum= (c+d);
// console.log(sum);

// let feespaid = true;
// let feesunpaid = false;

// alert(feespaid);
// alert(feesunpaid);

//  let f = null;
//  console.log(f)

// let g = 21;
// g = "Uzair";
// g = false;
// console.log(g);
// console.log(typeof g);

// let h = 4; let j = 6; let k = (h+j); console.log(k); 

// let $john = 5;
// let _Kavin = 8;
// let h4 = 6;
// console.log($john);

// let Jen = 9;
// let jen = 8;

// console.log(jen);
// let timeWatch = "Karachi"

// Arthmetic Operators
// let a = 8;
// let b = 2;

// let c = a+b;
// let d = a-b;
// let e = a*b;
// let f = a/b;
// let g = a%b;
// let h = a**b ;

// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);


// Assignment Operator

// let a = 5;

// // a = a+4; 
// a+=4
// a -=3
// console.log(a)

// Increment and Decrement Operator

// let a = 2;

// a++;
// console.log(a);

// let a = 4;
// let b = 5;

// let c= ++a - --b + ++a;
// // let c = 5 - 4 + 6
// console.log(c)

// Concatinate 

// let firstName = "Areesha";
// let lastName = "Uzair";

// let fullName = firstName + " " + lastName;
// alert(fullName);

// Prompt
// let question = "What is your age?";
//  let age = prompt(question);
//  let newage = parseInt(age)
// console.log(newage);

// let question = "What is your age?";
//  let age = prompt(question);
//  let newage = Number(age) + 2
// console.log(newage);


// let questions = prompt("What is your name?");
// document.write(questions);

// let question1 = "What is your name?";
// let answer = prompt(question1);
// document.write(answer);

// String into integar

// Comparison Operator

// let a = 2;

// console.log(a == 4);
// console.log(a === 4);
// console.log(a != 4);
// console.log(a !== 4);
// console.log(a > 4);
// console.log(a < 4);
// console.log(a <= 4);
// console.log(a >= 4);

// Logical Operator


//AND
// let a = 6;
// let b = a > 50 && a < 60
// console.log(b)

//OR
// let a = 4;

// let b = a > 5 || a < 7;
// console.log(b);

// NOT Operator

// let a = 2;
// let b = !(a < 40);
// console.log(b);

//Condition if/ else

// let age = prompt("What is your age?");

// if (age >=18){
//     console.log("You can apply for driving License");
// } else{
// console.log("Not eligible for driving")
// }

// let percentage = prompt("What is your percentage?");
// let a= parseFloat(percentage);
// if (a>=80){
//     document.write("Congratulation! You got A-One Grade");
// }
// else if(a>70){
//     document.write("Congratulation! You got A Grade");
// }
// else if(a>60){
//     document.write("Consgratulation! You got B Grade");
// }
// else{
//     document.write("You are failed");
// }


// Nested if

// let score = prompt("What is your score?");
// let a = parseFloat(score);
// if (a> 80){
//     document.write("A-One");
//     if(a>70){
//         document.write("A Grade");
//     }
//     if(a>60){
//         document.write("B Grade");
//     }
// }
// else {
//     document.write("Failed")
// }
// Vowel Logical Operator with if else

// let input= prompt("Write a English Alphabet");

// if (input == "a" || input == "e" || input == "i" || input == "o" || input == "u"){
//     document.write("It's a Vowel")
// }
// else {
//     document.write("It's a consonant")
// }

// For Loop


// for (let a=0; a<10; a++){
//     console.log(a);
// }

// // Table Loop
// let b=prompt("Enter a number for table");
// let c= parseInt(b)
// for( a=1;a<10;a++){
//     console.log(c+"x"+a+ "=" + (c*a))
// }

// for (let a=0;a<10;a++){
//     if (a==7){
//         break;
//     }
//     console.log(a)
// }

// for (let a=0;a<10;a++){
//     if (a==7){
 //         continue;
//     }
//     console.log(a)
// }

//Prime Number

// let a= prompt("Enter a number");
// let num = parseInt(a);

// for (let i=2;i<num;i++){
//     let result =num % i;
//     if (result == 0){
//         document.write("Not a Prime Number");
//         break;
//     }
//     else{
//         document.write("Prime Number")
//     }
// }

//Array

// let a = [34, 56, 67, 87];

// let b = new Array(23, 89, 80);

// console.log(a[0]);

// let c = [{name: "Uzair"}, {name:"Areesha"}];
// console.log(c[0]);


// let food = ["Pizza", "Burger", "Biryani"];

// console.log(food[1]);
// food[1] = "Fries"

// console.log(food[1])

// let color = ["Red", "Yellow", "Blue"];
// color.push("Green")
// console.log(color)
// console.log(color.length);

// let food = [];

// food.push(prompt("Enter your favourite Food"));
// food.push(prompt("Enter your favourite Food"));
// food.push(prompt("Enter your favourite Food"));
// console.log(food)
// document.write(food);

//Nested Loop

// for (let a=0; a<7; a++){
//     for (let b=0; b<4; b++){
//         console.log("Hello")
//     }
// }

// PUSH and POP

// let cloth =[];
// cloth.push("Jean");
// cloth.push("Shirt");
// cloth.push("Tie");
// console.log(cloth);
// let a = cloth.pop();
// console.log(cloth)
// console.log(a)

// SHIFT

// let food = [];
// food.push("Burger");
// food.push("Sandwich");
// food.shift();

// console.log(food);

// Array with Loop

// let food =["Sandwich", "Burger", "Fries"];
// for (let a=0;a<food.length;a++);{
//     console.log(food[a])
// }

// Splice

// let food = ["Burger", "Sandwich", "Pizza"];
// food.splice(1,0, "Fries", "Cheese");
// console.log(food);

// Slice 
// let fruits = ["apple", "oranges", "grapes", "mangoes", "guava"];
// let a = fruits.slice(1,3);
// console.log(a);

//  let a = "Hello \'World'";
//  let a = "Hello \n World";
//  let a = "Hello \t 'World'"; 
//  let a = "Hello \'World'";
//  console.log(a);














