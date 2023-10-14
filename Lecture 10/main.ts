// Topic function overload
// overload is used for defining data type

// function add(arg1: string, arg2: string): string; // oprion 1
// function add(arg1: number, arg2: number): number; // option 2
// function add(arg3: boolean, arg2: boolean): boolean; // option 3

// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2
// };

// add(3,3);

// PIAIC Whatsapp number 0308-2220203

// Object Ortiented Programming
// it guide us to write the code... it makes easy to use code
// method of writig the code
// 4 Pillars of Object Oriented Programming
// 1.Inheritance // inhert somthing from parent to child
// 2. Abstract // hide the complex functionality/code
// 3. encapsulation // make the code private 
// 4. polymorphism // different form of same thing

// Class of object is blue print// sketch of code

// Topic Class

// class Person {
//     name:string = "Alex";
//     age: number =22;

//     constructor(){
//         console.log(this);
//     }
// }
// let alex = new Person();

// console.log(alex);

// this is built in empty object used in Javascript and Typescript

// class Person {
//     name:string;
//     age: number;

//     constructor(name: string, age:number){
//         this.name = name;
//         this.age = age;
//     }
// };
// let hamzah = new Person("hamzah", 22);
 
// console.log(hamzah);

// class GoodGreeeter {
//     name!:string;
    
//     }

// let val = new GoodGreeeter();
 
// console.log(val);

// class GoodGreeeter {
//      readonly name:string;
    
//      constructor(){
//         this.name = "Uzair"
//      }
//     }    

// let val = new GoodGreeeter();
 
// console.log(val);


// class GoodGreeeter {
//      name:string;
   
//     constructor(){
//        this.name = "Uzair"
//     }
    

// greet(){
//     console.log(`Hello ${this.name}`)
// }

// }

// Topic Inheritance

class Person {
    name:string;
    constructor(name:string){
        this.name = name;
    }
}

class Student extends Person {
    // name: string;
    rollNo: number;
    constructor(name:string, rollNo:number){
        // this.name = name;
        super(name);
        this.rollNo = rollNo;
    }
}
let std1 = new Student("okasha", 21)

class Teacher {
    name: string;
    salary: number;
    constructor(name:string, salary:number){
        this.name = name;
        this.salary = salary;
    }
}














