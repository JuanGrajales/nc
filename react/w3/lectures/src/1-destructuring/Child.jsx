import React from "react";

const Child = ({ namee }) => {
  return (
    <div>
      <h1>Child</h1>
      <p>Prop 1: {namee}</p>
      {/* <p>Prop 1: {props.namee}</p> */}
    </div>
  );
};

export default Child;

// import React, { Component } from "react";

// class Child extends Component {
//   render() {
//     const { namee, prop2, prop3, prop4 } = this.props;
//     return (
// <div>
//   <h1>Child</h1>
//   <p>Prop 1: {namee}</p>
// </div>
//     );
//   }
// }

// export default Child;
