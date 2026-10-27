// prototype: Standard JavaScript mechanism to attach object inheritance.

// The main difference is that props pass dynamic data down to React components, while prototypes are the underlying system JavaScript uses to share methods and properties between objects


import React from 'react'

// 1. Define the Prototype Constructor Blueprint
function StudentBlueprint(name, age) {
  this.name = name;
  this.age = age;
}

// 2. Attach a shared method to the prototype
StudentBlueprint.prototype.sayHello = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

const Prototypes1 = () => {
  // 3. Create a new instance from the prototype
  const student = new StudentBlueprint("Prinit", 21);

  return (
    <div>
      <h2>Prototype Example Component</h2>
      {/* 4. Call the prototype method directly in JSX */}
      <p>{student.sayHello()}</p>
    </div>
  )
}

export default Prototypes1
