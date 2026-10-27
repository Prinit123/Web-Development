// what is function

//  a block of codes it can call multiple Times

// two types


// function. Declaration

// function greet()
// {
//     console.log("HEllo World");

// }
// greet()


// Variable. expression

// const greet=function()
// {
//     console.log("Welcome to KICT");

// }
// greet()



// function. with. parameter

// function add(a,b)
// {
//     console.log(a+b);

// }
// let a=21,b=34;
// add(a,b)

// function with default. Parameter
function add(a=10,b=34)
{
    console.log(a+b);

}
add(23,30)


// function with. rest parameter
// function add(...a)
// {
//     console.log(a);

// }

// add(12,23,34,34,45,56)

// function with return
// function add() {
//     let a = 21, b = 34;
//     return a + b

// }
// console.log(add());


// Arrow Function

// const great=()=>{
//     console.log("Hello Arrow Function");
// }

// great()

//annonumus function

// (()=>{
//     console.log("HEllo World");

// })
// ()


// callback function

function greet(name,callback){
    console.log("Hello"+name);
    callback();

}
function sayBye()
{
    console.log("goodBye!");

}
greet("Amit",sayBye)

// Recursion
// function  factorial(n){
//     if(n==1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// console.log(factorial(5));