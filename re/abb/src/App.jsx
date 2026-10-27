// import React from 'react'
// import Component from './Component'
// import Student from './Student'

// const App = () => {
//   return (
//     <div>
//       <h1>hi</h1>
//       <Component />
//       <Component />
//       <Component />
//       <Component />
//       <Component />
//       <Component />
//       {/* <Component></Component> */}

//       <Student   />
//       {/* <Student  name="Prinit" course="Eng" /> */}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Component from './Component'
// import Props1 from './Props1'

// const App = () => {
//   return (
//     <div>
//       <h1>hi</h1>
//       <Props1   name="89" age="34"/>
//       {/* <Component />
//       <Component /> */}
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Prototypes1 from './Prototypes1'

// const App = () => {
//   return (
//     <div>
//       <h1>React App Entry Point</h1>
//       <Prototypes1 />
//     </div>
//   )
// }

// export default App


import React from 'react'
import Component from './MyComponent'
import MyComponent from './MyComponent'

const App = () => {
           return (
                      <div>

                                 <Component  name = "manav"   age = {23} />

                                 <MyComponent name = "prinit" age = {34} />
                      </div>
           )
}

export default App
