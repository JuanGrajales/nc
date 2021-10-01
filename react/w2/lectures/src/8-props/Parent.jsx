// Steps to creating a variable?
// 1. let/var/const varName
// 2. varName = 'value'
// Where can you make a variable?
// Where can't you make a variable?
// How do you use a variable?

import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = {
    // how we pass a value from the state of one component to the another component?
    name: "Zabian",
    balance: 1000000,
  };
  render() {
    return (
      <div>
        <h1>Parent Comp</h1>
        <button onClick={() => this.setState({ balance: 900000 })}>
          Withdraw
        </button>
        <Child prop1={this.state.balance} />
      </div>
    );
  }
}

export default Parent;
