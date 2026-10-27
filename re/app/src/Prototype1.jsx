
// Assuming you mean PropTypes (for runtime prop type checking), here is how to add them to a React class component using two common approaches.



//React automatically calls render() whenever the component's state changes or when new props are received from a parent component, updating the screen to reflect the latest data.



// rcc use
// import React, { Component } from 'react'

// export default class Prototype1 extends Component {
//   constructor(props) {
//     super(props);
//     thid.dtste = {
//       name = "prinit",

//     }
//   }
//   render() {
//     return (
//       <div>
//         {/* {this.state.name} */}
//         <h2>Eenter name</h2>
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserCard extends Component {
  // Defined statically inside the class body
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
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