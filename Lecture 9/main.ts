// Topic async
// synchronous means works in sequence
// In asynchronus programming, code works as per our instruction

// console.log("First Task");

// // for (let i = 0; i < 20000000 ; i++){}

// console.log("Second Task");

// Topic Call Back Function
// parameter passed within the function

// let parentFunction = (cb: () => void) => {
//     cb();
//     console.log("parent function called");
//     cb();
// };
// // now we have called call back function by passing cb()

// let callBackFunc = () => {
//     console.log("Call Back Function Called");
// };

// parentFunction(callBackFunc)
// It runs parent function because it is passed but not called


// Set time out is built in funcstion , in it first parameter we write call back function while in another write time in mili second
// it is asynchronous function, it allows other code to run

// console.log("First")

// setTimeout( () => {
//     console.log("Hello")
// }, 3000 )

// console.log("Second");

// // When we set the time as zero then it will not take time but it allows other code to run

// console.log("First")

// setTimeout( () => {
//     console.log("Hello")
// }, 0 )

// console.log("Second");


// Topic Architecture of Aynchronous Function

//Java script code execute in call stack - e.g console.log("First")
// after execution of code then call stack remove the code e.g console.log("First") and move to another code
// but asynchronous function execute in Web APIs
// asynchronous function means also include requesting server
//  Call back queue receive function after execution from WebAPIs orderly to send to Call Stack
// Event Loop forward the code from Call Back Queue to Call Stack
 
// Example of asynchronous and call back function
// Example 1
// let orderPizza = (ringBellCb: () => void) => {
//     setTimeout( ()=> {
//         ringBellCb()

//         // console.log("PIzza") // it gives outcome
//         // return "Pizza" // return does not use becuase function does not return any thing after execution of function
//     }, 3000)
// } ;

// let ringBell = () => {
//     console.log("Your Pizza is ready")
// };

// // let pizza = orderPizza(ringBell);
// // console.log(pizza)

// orderPizza(ringBell);

// Example 2
// let isBurnt = Math.random() < 0.2;


// let orderPizza = (ringBellCb: () => void, errorHandleCb: () => void ) => {
//     setTimeout( ()=> {
//         if(isBurnt){
//             errorHandleCb()
//         }else {
//         ringBellCb()
//         }
      
//     }, 3000)
// } ;

// let ringBell = () => {
//     console.log("Your Pizza is ready")
// };

// let errorHandle =() => {
//     console.log("Something went wrong");
// }

// orderPizza(ringBell, errorHandle);

// Example 3 with Promise

let orderPizza = () => {
    return new Promise ( (resolve, reject) => {
        let isBurnt = true
        setTimeout ( () => {
            if(isBurnt = true){
                reject("Went wrong")
            }else {
            resolve("Pizza ready");} // this parameter goes in to then parameter
        }, 5000)
    } )
}

// resolve function is called with then 
// parameter passed in resolve would come in then's parameter
// orderPizza().then( (value) => {
//     console.log(value)
// })
// .catch( () =>{
//     console.log("Went wrong")
// })


// 
let getOrder = async () => {
    try {

    const value = await orderPizza();

    console.log(value)
    }
    // This function is called when reject function 
    // e stand for 
    catch (err){
        console.log(err)
    }
}

getOrder()



































