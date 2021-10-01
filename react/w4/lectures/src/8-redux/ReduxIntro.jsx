import React from "react";
import { connect, useDispatch } from "react-redux";
import { increment } from "./all-in-one";

const ReduxIntro = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Data from Redux Store</h2>
      <button onClick={() => dispatch(increment())}>Increment Counter</button>
      <p>counter: {props.counter}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(ReduxIntro);
