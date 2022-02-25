import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child</h1>
        <p>Prop: {this.props.name}</p>
      </div>
    );
  }
}

export default Child;
