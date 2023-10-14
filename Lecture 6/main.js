"use strict";
// const fan: boolean  | number = 1;
// if (typeof fan === "number"){
//     fan.toFixed(2);
//     console.log("Fan is On");
// } 
// else{
//     console.log("Fan is Off");
// }
// let myAge : string| number;
// myAge = 16 //narrowing  // narrowing does not change original data type  but it allows to use methods of both mentioned data type
// myAge.toFixed(2);
// myAge= "16"
// console.log(myAge); 
// myAge.toUpperCase()
// Math.random()  // generate random number between 0 t0 1
// let random = Math.random() * 100;
// console.log(random);
// let roundValue= Math.round(random) 
// console.log(roundValue)
// let myAge: number | string
// if (roundValue > 50 ){
//     myAge = 25
//     console.log("This is a number: ", myAge);
// }else {
//     myAge = "25"
//     console.log("This is a number: ", myAge)
// }
// If Else in different way
// let age = Math.random() > 0.6 ? "Khan" : 60;
// //    Generate random number      If condition : Else condirion
// if (typeof age === "number"){
//     age
// }else{
//     age
// }
// Topic Literal
// it restricts type of data 
// let trafficLight: "yellow" | "red" | "green" = "yellow"
// trafficLight = "blue";
// let firstName = "Uzair" ;
// firstName = "Saad";
// const firstName1 = "Uzair"; // it becomes dattype
// Topic Object
// let teacher = {
//     "first-name" : "Zeeshan",
//     experience : "10"
// }
// console.log(teacher.experience);
// console.log(teacher["first-name"]);
// Structural typing
//interface allows to make custom data type
// interface Istudent {
//     name: string,
//     age : number
// }
// let student : Istudent = {
//     name: "Uzair",
//     age: 22
// }
// interface food {
//     dish1: string,
//     dish2: string
// }
// let dinner: food= {
//     dish1: "Biryani",
//     dish2: "Haleem"
// }
// Topic Type Arears
// type All = string | number | Boolean
// let age: All = ""
//  interface deal1 {
//     food: string
//  }
//  interface deal2 {
//     food:string,
//     drink: string,
//  }
//  let hamzahOrder: deal1 ={
//     food: "Biryani"
//  }
//  let shahzadOrder: deal2 ={
//     food: "Haleem",
//     drink: "Pepsi"
//  }
// hamzahOrder = shahzadOrder // structure match
// shahzadOrder = hamzahOrder // structure not match
