// // function decleration

// function greed(){
//            console.log("hello whorld!");
// }
// greed()

// function expression

// const greed=function(){
//            console.log("hello whorld! 123");
// }
// greed()

// function with parameter?

// function greed(a,b){
//            console.log(a+b);
// }
// let a = 2;
// let b = 3;
// greed(a,b)

// function with default parameter

// function add(a=2,b=4){
//            console.log(a+b);
// }
// add(a=3,b=4)


// function with rest parameter
// function add(...a){
//            console.log(a);
// }
// add(2,3,4,5,6,7,8)


// function with return


// function add(){
//            let a=2 , b=2;
//            return a+b;
// }
// console.log(add());


// arrow function?

// const greed=()=>{
//            console.log("hii!");
// }
// greed();

// (()=>{
//            console.log("byy!");
// })
// ()

// call back function?

function greed(name,callback){
           console.log("hello"+name);
           callback();
}

function sayby(){
           console.log("good byy");
}
greed("jenish",sayby)