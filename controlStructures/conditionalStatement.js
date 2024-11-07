// control structure is js is essential for controlling the flow of
// execution in your code. They allow you to dictate how your 
// programme should respond based on conditions 

// 1. conditional statement
// conditional statement executes a block of code if the specified
// condition is true or false

// a. If statement
let temperature = 30;

if( temperature > 25){
    console.log('it is a hot day')
 } else{
    console.log('it is a cold day')
 }

const isAdmin = false;
const isSuperUser = false;

if ( isAdmin || isSuperUser){
    console.log("you can have access to the app")
}else {
    console.log("you are not allow to access this app")
}

const hasFee = true;
const hasGoodHealth = true;

if( hasFee && hasGoodHealth){
    console.log("Welcome to the class")
}else{ 
    console.log("Go back home")
}

