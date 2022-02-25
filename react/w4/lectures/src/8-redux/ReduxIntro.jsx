import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "./all-in-one";

class ReduxIntro extends Component {
  render() {
    return (
      <div>
        <h1>Redux Intro</h1>
        <h2>Data from Redux Store</h2>
        <p>Counter property from redux: {this.props.counter}</p>
        <button onClick={this.props.dispatchIncrement}>
          Increment Counter
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchIncrement: () => increment(),
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxIntro);
