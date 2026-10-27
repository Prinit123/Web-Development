// asynchronous code that looks and behaves like clean, readable, synchronous code

// async function fetchUserData() {
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         let user = await response.json();
//         console.log(user);
//     }catch(error){
//         console.error('Error fetching user.',error);
//     }
// }

// fetchUserData();


async function fetchUserData() {
    try{
        let responcse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let user = await responcse.json();
        console.log(user);
    }catch(error){
        console.error('Error fethching user ',error);
    }
}

fetchUserData();
