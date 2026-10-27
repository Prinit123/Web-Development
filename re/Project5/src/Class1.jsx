// useEffect is a built-in React Hook that lets you synchronize a component with an external system or
//  handle side effects, such as fetching data, subscribing to events, or manually changing the DOM


// 1. Runs on Every Single Render (No Array Specified)If you do not pass a dependency array at all,
//  the code inside will run during the initial page load and after every single component update.

// useEffect(() => {
//   console.log("This logs on every render");
// }); // No dependency array


// 2. Runs Only Once (Empty Array [])If you provide an empty array, 
// the effect executes exactly once when the component first mounts onto the screen. 
// This is the optimal configuration for firing initialization scripts or standard API page setups

// useEffect(() => {
//   console.log("This logs exactly once on component mount");
// }, []); // Empty dependency array


// 3. Runs Only When Specific Values Change (With Tracked Values)By adding variables into your array,
//  you instruct React to run the effect during page load, and then re-run it only if one of those specified variables shifts values.

// const [userId, setUserId] = useState(1);

// useEffect(() => {
//   console.log(`User ID updated to: ${userId}. Re-fetching dynamic profiles...`);
// }, [userId]); // Triggers only when 'userId' state updates


// 4. Running a Cleanup Function (To Prevent Memory Leaks)If your effect initiates a persistent process
//  (like a chat socket connection, window resize listener, or setInterval), 
// you should return a cleanup function inside your effect block.
//  React will run this cleanup function right before the component disappears from the UI (unmounts) to clear out system memory.

// useEffect(() => {
//   const handleResize = () => console.log(window.innerWidth);
//   window.addEventListener("resize", handleResize);

//   // Return the cleanup action
//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);


// ***********************************************************************************************************************************************

// React useEffect Dependency Array Reference Sheet

// import React, { useEffect, useState } from 'react';

// function UseEffectReference() {
//   const [value, setValue] = useState(0);

//   // =========================================================================
//   // 1. NO DEPENDENCY ARRAY
//   // Execution Timing: Runs after EVERY single render cycle.
//   // Ideal Use Case:   Tracking general app activity or universal debugging logs.
//   // =========================================================================
//   useEffect(() => {
//     console.log("LAYOUT 1: This logs on initial mount AND after every single state/prop change.");
//   });


//   // =========================================================================
//   // 2. EMPTY DEPENDENCY ARRAY ([])
//   // Execution Timing: Runs ONCE during the initial component mount.
//   // Ideal Use Case:   Primary REST API fetches, load initial data, or event setup.
//   // =========================================================================
//   useEffect(() => {
//     console.log("LAYOUT 2: This logs EXACTLY ONCE when the component first mounts.");
    
//     // Example: fetch("https://example.com")
//   }, []);



//   // =========================================================================
//   // 3. WITH DEPENDENCY VALUE ([value])
//   // Execution Timing: Runs on initial mount AND whenever the specified value modifies.
//   // Ideal Use Case:   Updating search results dynamically, form syncing, or ID-based fetches.
//   // =========================================================================
//   useEffect(() => {
//     console.log(`LAYOUT 3: This logs on mount AND whenever 'value' changes. Current: ${value}`);
    
//     // Example: fetchUserDataById(value)
//   }, [value]);


//   return (
//     <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
//       <h3>Check your browser console to see the layout timings!</h3>
//       <button onClick={() => setValue(prev => prev + 1)}>
//         Trigger Re-render (Current Value: {value})
//       </button>
//     </div>
//   );
// }

// export default UseEffectReference;



import React, { useEffect } from 'react'
import { useState } from 'react'

function Class1(){

  const [users , setusers] = useState([]);

  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())                    //This line of code takes the raw HTTP response from your fetch()
                                                            // request and converts it into a usable JavaScript object or array.
    .then((data) => {
      setusers(data);
    })
    .catch((Error)=>{
      console.log("Error");
      
    })
  },[]);

// }
// const App = () => {
  return (
    <div>
      <h1>user list</h1>
      {
        users.map((user)=>(
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Email :- {user.email}</p>
            
          </div>
        ))
      }
      
    </div>
  )
}

export default Class1


