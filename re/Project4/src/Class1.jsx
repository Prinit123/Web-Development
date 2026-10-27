import React from 'react'
import { Activity } from 'react';
import { useState } from 'react'
function App(){
  const [name , setname] = useState("");
  const [age , setage] = useState(0);
  const [count , setcount] = useState(0);
  const [textname , settextname] = useState({
    name:"manav",
    age:34
  });

  const [students] = useState([
    {key : 1 , name : "prinit", sub : "sci", Activity:true},
    {key : 2, name : "sanju1", sub : "comurse", Activity:false},
    {key : 2, name : "sanju2", sub : "comurse", Activity:true}

  ]);

  const increase = ()=>{
    setcount(count+1);
  }
// }

// function App() {
  return (
    <div>

      <h1>hello kict </h1>
      <hr />
      <h2>count:{count}</h2>
      <hr />
      <button onClick={increase}>increase</button>

      {
        students
        .filter(student => student.Activity)
        .map(student=>(
          <div key={student.id}>

          <h2>name:{student.name}</h2>
          <h2>subject:{student.sub}</h2>
          </div>
        ))
      }
      
    </div>
  )
}

export default App
