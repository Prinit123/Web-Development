import React from 'react'
import { useState } from 'react'

function Class4(){

    const [name , setname] = useState("");

    const handleChange = (e)=>{
        setname(e.target.value)
    };

// }

// const Class4 = () => {
  return (
    <div>
        <h3>Ternary operator </h3>
        <hr />
        <input type="text" placeholder='enter name' value={name} onChange={handleChange} />
        
       {/* --- TERNARY OPERATOR IF/ELSE LOOP --- */}  
       {
        name == "Prinit" ? (
            <div>
             <h2>name : {name}</h2>
             <button type="submit">submit</button>
             </div>
             
        ):(
            <h2>"enter login  name" 
            </h2>
        )
       }
      
    </div>
  )
}

export default Class4
