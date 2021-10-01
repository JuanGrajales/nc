import React from "react";
import { connect } from "react-redux";
import { changeDate, increment } from "./complex-setup";

const ReduxIntro = ({ changeTomorrow, counter, date, incrementCount }) => {
  return (
    <div>
      <h2>Data from Redux Store</h2>
      <button onClick={incrementCount}>Increment Counter</button>
      <p>Counter value from redux state: {counter}</p>
      <button onClick={changeTomorrow}>Change Date</button>
      <p>Date value from redux state: {date}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state of redux store", state);
  return {
    counter: state.counter,
    date: state.date,
    log: state.isLogged,
  };
  // return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(increment()),
    changeTomorrow: () => dispatch(changeDate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxIntro);
// export default connect(mapStateToProps)(ReduxIntro);
