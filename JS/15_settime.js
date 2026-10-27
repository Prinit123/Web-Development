// set time
// settime
// set interval

// number of milliseconds (1000 ms = 1 second).


// Run code ONCE after a delay
// setTimeout(()=>{
//     console.log("hello world");
// },3000)

// Run code REPEATEDLY at fixed intervals
// setInterval(()=>{
//     console.log("good morning");
// },2000)


// Helper function to pause execution
// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// async function processTasks() {
//     console.log("Task 1 started...");

//     await sleep(3000); // Pause execution for 3 seconds

//     console.log("Task 2 started after 3 seconds!");
// }

// processTasks();

// the backtick symbol ( ` )

let seconds = 0;

let timerId = setInterval(() => {
    seconds++;
    console.log(` time: ${seconds} seconds`);

    // Stop after 5 seconds
    if (seconds === 5) {
        clearInterval(timerId);
        console.log("Timer stopped.");
    }
}, 1000);