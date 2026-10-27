// import React from 'react'
// import './Component.css'

// const Component = () => {
//            const co = {
//                       color:"green",
//            }

//   return (
//     <div>
//       <h1 className='head'>hi , my name is prinit</h1>
//       <h2 style={{color:'red'}}>Inline css</h2>
//       <h3 style={co}>Internal css</h3>
//     </div>
//   )
// }

// export default Component


// import React from 'react'
// import './Component.css'

// const Component = (props) => {
//   const co = {
//     color:"green",
//   }

//   return (
//     <div>
//        <h1 className='head'>hi , my name is prinit</h1>
//        <h2 style={{color:'red'}}>Inline css</h2>
//        <h3 style={co}>Internal css</h3>

//     </div>
//   )
// }

// export default Component

// import React from 'react'
// import './Component.css'

// const Component = () => {
//            const co = {
//                       color : 'green',
//            }
//            return (
//                       <div>
//                                  <h1 style={co}>hello </h1>
//                                  <h1 style={{ color: 'red' }}>hello </h1>
//                                  <h1 className='head'>hello </h1>
//                       </div>
//            )
// }

// export default Component

// import PropTypes from 'prop-types'
// import React from 'react'

// const Component = (props) => {
//   return (
//     <div>
//       <h1>hello {props.name} {props.age}</h1>
//     </div>
//   )
// }
// Component.propTypes = {
//   name : PropTypes.string.isRequired
// }

// export default Component

// import React from 'react'

// function Component({name = "manav" , age}) {
//   return (
//     <div>
//       <h1>hello {name} {age}</h1>
//     </div>
//   )
// }



// export default Component


// import PropTypes from 'prop-types'
// import React from 'react'

// const Component = ({name = "prinit" , age}) => {
//   return (
//     <div>
//       <h1>hello {name} {age}</h1>
//     </div>
//   )
// }


// export default Component


import React, { Component } from 'react'

export default class MyComponent extends Component {
  static propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number
  }
  render() {
    return (
        <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.age}</p>
      </div>
    )
  }
}

