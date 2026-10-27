// import React from 'react'
import  React , { useState } from "react";
function Class2(){
     const [name, setName] = useState("");


    //  We use e.target.value because it is the specific JavaScript path used to grab the exact
    //  text a user just typed inside an input box

     const handleChange = (e)=>{
        setName(e.target.value);
     }

    //  /e.preventDefault()  ───► [Stops native page reload loop , : It stops the browser's default behavior, 
    // which is to refresh the entire browser window upon form submission.]

     const handleFormSubmit = (e)=>{
        e.preventDefault();
        alert("form submitted");
     }

// }
// function Class2() {
  return (
    <div>
      <h2>hello kict </h2>
      <hr />
   


      <form action="" onSubmit={handleFormSubmit}>
           <input type="text" placeholder='enter name' value={name} onChange={handleChange} />
      <h3>name : {name}</h3>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Class2
