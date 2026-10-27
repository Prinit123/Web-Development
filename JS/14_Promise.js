
// Promises in JavaScript are used to handle asynchronous operations—tasks
// like fetching data from an API, reading files, or setting timers
// that take time to complete—without freezing
//  or blocking the rest of your code.

// new Promise(...): This creates a new Promise object and starts
//  executing the function inside it immediately.

// (resolve, reject): JavaScript automatically passes two
//  function controls into your code:

// A Promise is only needed when time or waiting is involved.

let prompt=new Promise((resolve,reject)=>{
    let a=4
    if(a%2==0){
        resolve("even")
    }
    else{
        reject("odd")
    }
})

prompt.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})
