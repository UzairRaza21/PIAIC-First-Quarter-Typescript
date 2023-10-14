// Topic Inheritance

// class Person{
//     name:string
//     age: number
//     address: string
//     constructor(name:string, age:number, address:string){
//         this.name =name
//         this.age = age
//         this.address = address
//     }
// }
// // Inheritance properties can be access through 'this' after making properties

// class Teacher extends Person {
//     salary : number
//     constructor(salary:number, name:string, age: number , address: string){
//         super(name, age, address)
//         this.salary= salary
//     }
// }

// // if we want to make class of object then we use keyword 'new'

// let teacher1 = new Teacher(50000, "john", 20, "USA")
// console.log(teacher1);



// Example of Inheritance

// //Incorrect
// class Animal {
//  eat(){
//     console.log("Animal")
//  }  
// }

// class Tiger extends Animal{
// }

// let tiger = new Tiger ()
// console.log(tiger)

// Topic

// let x: number = 0;

// class C {
//     x: string = "hello"; // It is property of Class, we cannot make variable in class

//     m(){
//         x="world";
//     }
// }

// Topic Encapulation- can be used with Getter and Setter

// class C {
//     private _length = 0 ; // private ... we can not make changes in it . it is a previous property
//     // we can access private property withing the class
//     // to use getter function we write get before name of function
//     get length(){
//         return this._length
//     }
//     set length(value){
//         this._length = value
//     }
// }

// // Encapsulation - means to conceal the property with private
// // if we want to use the private property outside the object then we use getter and setter
// // we cannot call getter function, they behave as property

// let obj1 = new C()
// obj1.length = 10
// console.log(obj1.length)


// Topic Implmenting class into interface

// interface IPerson {
//     name: string
// }
// // Expands the class of IPerson with hekp of implements
// class Person implements IPerson{
//     name! : string;
//     age! : number
// }

// let person1 : Person = new Person();

// interface A{
// //     name:string
// // }

// // interface B{
// //     age : number
// // }

// // interface A extends B {}

// // Topic Overridding Methods

// class Person{
//     name: string
//     age : number
//     address : string
//     constructor(name: string, age: number , address: string){
//         this.name = name
//         this.age = age
//         this.address = address
//     }
//     eat(raita:boolean){
//         console.log("Biryani",raita);
//     }
// }
// class Teacher extends Person {
//     constructor(name: string, age: number , address: string){
//         super(name, age, address)
//     }
// }

// class Student extends Person {
//     constructor(name: string, age: number , address: string){
//         super(name, age, address)
//     }
//     eat(){
//         console.log("Burger")
//         super.eat(false)
//     }
// }
// let teacher1 = new Teacher('john', 20, 'USA')
// teacher1.eat(false)

// let std1 = new Student ('Alber', 20, 'Pakistan')
// std1.eat()


// // DSA courses learn alogrithem 

// Topic 

// class Person {
// //    private  name: string = `okasha`
//     protected name: string = `okasha` // both protected and private can be used
// }
// // ! used to not initiatize value 
// class Teacher extends Person {
//     updateName(){
//         this.name = "hamza"
//     }
//     displayName(){
//         return this.name
//     }
// }
// // It can be change by using update
// let teacher1 = new Teacher()
// // teacher1.name = `hamzah` // hamzah print because we have change the value
// // if we donot want to change its value
// teacher1.updateName()
// console.log(teacher1.displayName());

// // Topic Static Property
// // It is associated with every property
// class Student {
//     name: string
//     rollNo: number
//     static serialNo: number= 0
// //    wrong // serialNo:number = 0 
//     constructor(name: string, rollNo:number){
//         this.name = name
//         this.rollNo = rollNo
//     //    wrong // this.serialNo += 1
//         if (Student.serialNo < 5){
//             Student.serialNo += 1
//         }
//     }
// }
// let student1 = new Student (`ali`, 1234) 
// let student2 = new Student (`ali`, 1234) 
// let student3 = new Student (`ali`, 1234) 
// let student4 = new Student (`ali`, 1234) 
// // console.log(student1);
// console.log(Student.serialNo);








