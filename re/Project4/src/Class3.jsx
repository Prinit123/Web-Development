import React from 'react'
// import { Activity } from 'react'
import { useState } from 'react'
function Class3(){
    const [students] = useState([
        {id : 1 , name:"manav" , course: 'BE' , Activity:true},
        {id : 2 , name:"Aman" , course: 'CSE' , Activity:true},
        {id : 3 , name:"Krish" , course: 'IT' , Activity:true}
    ])

    const courseType = (course)=>{
        switch (course) {
            case "BE":
                return "Bechler Enginnering";
                // break;
            case "CSE":
                return "computer Science Enginnering"
            case "IT":
                return "information Technology";
            default:
                return "other course";
        }
    };
// }

// const Class3 = () => {
  return (
    <div>
        {
            students
            .filter(student => student.Activity)
            .map(student=>(
                <div key ={student.id}>
                    <h2>name : {student.name}</h2>
                    <h2>course : {student.course}</h2>
                    <h2>full catgory :{courseType(student.course)}</h2>

                </div>

            ))
        }

      
    </div>
  )
}

export default Class3
