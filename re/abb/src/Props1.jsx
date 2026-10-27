// The main difference is that props pass dynamic data down to React components, while prototypes are the underlying system JavaScript uses to share methods and properties between objects



// import React from 'react'

// function Props1(props) {
//   return (
//     <div>
//       <h1>hello {props.name} {props.age}
//       </h1>
//     </div>
//   )
// }

// export default Props1

// import React from 'react'

// const Props1 = ({name = "kict" , age}) => {
//   return (
//     <div>
//         <h1>hello {name} {age}</h1>
//     </div>
//   )
// }


import React from 'react'
import PropTypes from 'prop-types'

const Props1 = (props) => {
  return (
    <div>
      <h1>hello  {props.name} {props.age}</h1>
    </div>
  )
}

// validation in prop types
Props1.propTypes = {
  name: PropTypes.string

}

export default Props1




