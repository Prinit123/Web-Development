import React from 'react'
import { useState } from 'react'

function App() {

// '''
// write code using Declarative Components that automatically
// update your web user interface (UI) whenever the application data change state
// '''
  const [count, setcount] = useState(0);
  const [name, setName] = useState("");

  const [student, setStudent] = useState({
    name: "Manav",
    age: 25
  });

  const [students] = useState([
    { id: 1, name: "Margi", course: "BCA", active: true },
    { id: 2, name: "Rahul", course: "BSc", active: false },
    { id: 3, name: "Priya", course: "BCom", active: true }
  ]);

  const icrease = () => {
    setcount(count + 1);
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.prevetDefault();
    alert("From Submitted");
  }


  const courseType = (course) => {
    switch (course) {
      case "BCA":
        return "Computer Course";
      case "BSc":
        return "Science Course";
      default:
        return "Other Course";
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Welcoe to KICT</h1>

      <hr />
      <h2>Counter :{count}</h2>
      <button onClick={icrease}>Increase</button>

      <hr />
      <input type="text" placeholder='Eenter Name' onChange={handleChange} />
      <h3> Name : {name} </h3>

      <hr />

      <form onSubmit={handleSubmit}>
        <button type='submit'>
          Submit
        </button>
      </form>

      <hr />

      <h3>Student Details</h3>

{/* .filter() extracts the correct data items, and .map() transforms them into visual layout elements. */}
{/* You place your data and functions inside curly braces {} because they act as a gateway to switch from HTML
 mode into JavaScript mode inside your layout code. */}

 {/* You use student.id in .map() because React needs a unique identifier for each list item to track,
  update, and re-render elements efficiently without reloading the entire page. */}
    {
        students
        .filter(student=>student.active)
        .map(student=>(
          <div key={student.id}>

            <h3>{student.name}</h3>

            <p>{student.course}</p>

            <p>{courseType(student.course)}</p>
          </div>
        ))
      }




    </div>
  )
}

export default App




// import React, { useState } from 'react';

// function App() {
//   // --- STATE LAYER ---
//   const [count, setcount] = useState(0);
//   const [name, setName] = useState("");
//   const [student, setStudent] = useState({ name: "Manav", age: 25 });
//   const [students, setStudents] = useState([
//     { id: 1, name: "Margi", course: "BCA", active: true },
//     { id: 2, name: "Rahul", course: "BSc", active: false },
//     { id: 3, name: "Priya", course: "BCom", active: true }
//   ]);

//   // --- 1. STATE ACTION METHODS (MUTATORS) ---
//   const increaseCounter = () => {
//     // Uses functional update to guarantee accurate state queueing
//     setcount(prevCount => prevCount + 1);
//   };

//   const updateStudentAge = () => {
//     // Spreads original object to safely modify single deep keys
//     setStudent(prevStudent => ({
//       ...prevStudent,
//       age: prevStudent.age + 1
//     }));
//   };

//   const toggleStudentActiveStatus = (id) => {
//     // Maps over array to create an immutable data copy
//     setStudents(prevStudents =>
//       prevStudents.map(item =>
//         item.id === id ? { ...item, active: !item.active } : item
//       )
//     );
//   };

//   // --- 2. USER INTERACTION HANDLERS (EVENTS) ---
//   const handleInputChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault(); // Fixed original typo
//     alert(`Form Submitted for: ${name}`);
//   };

//   // --- 3. DATA PROCESSING HELPERS (PURE FUNCTIONS) ---
//   const getCourseCategory = (course) => {
//     switch (course) {
//       case "BCA": return "Computer Course";
//       case "BSc": return "Science Course";
//       default: return "Other Course";
//     }
//   };

//   // --- 4. MODULAR RENDER METHODS (SUB-TEMPLATES) ---
//   const renderStudentCard = (item) => (
//     <div key={item.id} style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
//       <h3>{item.name} {item.active ? "🟢" : "🔴"}</h3>
//       <p>Course: {item.course} ({getCourseCategory(item.course)})</p>
//       <button onClick={() => toggleStudentActiveStatus(item.id)}>
//         Toggle Status
//       </button>
//     </div>
//   );

//   // --- MAIN TEMPLATE RENDER ---
//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       <h1>Welcome to KICT</h1>
//       <hr />

//       {/* Counter Segment */}
//       <h2>Counter: {count}</h2>
//       <button onClick={increaseCounter}>Increase</button>
//       <hr />

//       {/* Controlled Form Input Segment */}
//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={handleInputChange}
//       />
//       <h3>Name Live Preview: {name}</h3>
//       <hr />

//       {/* Action Form Segment */}
//       <form onSubmit={handleFormSubmit}>
//         <button type="submit">Submit Form Data</button>
//       </form>
//       <hr />

//       {/* Single State Entity Segment */}
//       <h3>Default Profile</h3>
//       <p>Name: {student.name} | Age: {student.age}</p>
//       <button onClick={updateStudentAge}>Increment Age</button>
//       <hr />

//       {/* Collection Matrix Loop Segment */}
//       <h2>Student Directory</h2>
//       {students.map(renderStudentCard)}
//     </div>
//   );
// }

// export default App;

