import React, { Component } from "react";

class Child extends Component {
  state = {
    balance: 1000000,
  };
  render() {
    return (
      <div>
        Child Comp <div>Prop from Parent: {this.props.prop1}</div>
        <br />
        Child Comp <div>State from Child: {this.state.balance}</div>
      </div>
    );
  }
}

export default Child;
