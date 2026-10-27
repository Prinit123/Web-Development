// React Hooks are special functions that allow functional components to use features such as state and lifecycle behavior.

// import React, { useEffect, useState } from 'react'

// function App() {

//   const [users,setUsers]=useState([]);

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((data)=>{
//       setUsers(data)
//     }).catch((error)=>{
//       console.log("error");

//     })
//   },[]);    //The empty array [] is called the dependency array
//   // It tells React to run the useEffect function exactly once when the component first loads onto the screen (mounts),
//   //  and never run it again on subsequent updates or state changes.


//   return (
//     <div>
//       <h1>User List </h1>

//       {users.map((user)=>(
// <div key={user.id}>
//   <h3>{user.name}</h3>
//   <p>Emmail : {user.email}</p>
// </div>
//       ))}
//     </div>
//   )
// }

// export default App




// useContext is a React Hook used to share data between multiple components without passing props manually through every component.
import React from 'react'
import "./App.css";
import { useTheme } from './useContextWork/ThemeContext';
import Navbar from './useContextWork/Navbar';
import Home from './useContextWork/Home';

function App() {
  const {theme}=useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Home />
      
    </div>
  )
}

export default App
