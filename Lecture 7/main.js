"use strict";
// // Structural Data Type
Object.defineProperty(exports, "__esModule", { value: true });
// interface deal1 {
//     food: string,
// };
// interface deal2 {
//     food: string,
//     drink: string
// };
// let hamzaOrderTray: deal1 ={
//     food: "Biryani"
// };
// let okashaOrderTray: deal2 = {
//     food: "Birayni",
//     drink: "Pepsi"
// };
// let hamza: deal1 = okashaOrderTray // No error because minimum requirement of passing food is fulfill
// // let hamzah: deal1 = { food: "Biryani", drink: "Pepsi"} // Showing error because we are making object- stale object
// interface user1 {
//     id: number,
//     name: string
// }
// let user2: user1 = {
//     id : 22,
//     name: "Uzair"
// }
// Topic Alias
// // It is called Alias
// type Author1 = {
//     firstName: string,
//     lastName: string
// };
// // it is called type-Alias
// interface Author2 {
//     firstName: string,
//     lastName: string
// };
// type Author3 = string | number | boolean;
// let Author3 = 22;
// let author: Author1 = {
//     firstName: "Uzair",
//     lastName: "Raza"
// };
// type Book = {
//     name: string,
//     // author: {
//     //     firstName: string,
//     //     lastName: string
//     // }
// //OR
//     author: Author1
// };
// let book1: Book = {
//     name: "Javascript",
//     author:{
//         firstName: "Uzair",
//         lastName: "Raza"
//     }
// };
// Topic Intersection Type
// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
//     teacher_age: number
// }
// interface Student {
//     student_id: number;
//     name: string;
//     student_age: number
//   }
// type Intersection = Student & Teacher
// let intersection: Intersection = {
//     teacher_Id: 1234,
//     teacher_name: " Uzair",
//     student_id: 12345,
//     name: "Raza",
//     teacher_age: 23,
//     student_age: 20
// }
// intersection takes common to same object
// Object rule is to write object with different
// Topic: Unknown
// initially, we may not know Data type but later we can assign data type
// let b : unknown ;
// b = 10;
// b = "abc";
// b = {ab: "ab"};
// b = [1, 2, 3];
// b = function(){
// }
// let c : boolean = a;
// let c : boolean = b;
// Unknown data type does not assignable to other Data Type
// let c : unknown = b;
// Unknown can be assign to unknown or any
// Topic : Never
// It assign to those datatype which never be assign- It is not possible type
// let firstName: string = "Uzair";
// if ( typeof firstName === "string"){
//     console.log(firstName);
// }
// else{
//     console.log(`else ${firstName}`);
// }
// Topic Explicit Casting
// let something: unknown = "Zia";
// let knownType = something as string;  // Method 1 : to cast datatype
// 'as' is used to cast datatype
// let knownType = <string>something  // Method 2 : to cast datatype
// let a = something as unknown as number
// Topic Enum
// Enum is a type and also property
// It is used to store multiple constants in one object
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
;
// Enum assign index number to each constant which starts from 0 
// but if you assign index number to constant
function assgnTask(day) {
    if (day === Days.Monday) {
        console.log("Admin Work");
    }
    else if (day === Days.Tuesday) {
        console.log("Admin Work");
    }
    else {
        console.log("else");
    }
}
assgnTask(Days.Monday);
console.log(Days[1]);
