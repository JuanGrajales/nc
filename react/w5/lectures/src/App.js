import React, { Component } from "react";
import ReduxIntro from "./1-redux/ReduxIntro";
import Fetch from "./3-react-fetch/Fetch";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux</h1>
        {/* <ReduxIntro /> */}
        <Fetch />
      </div>
    );
  }
}

export default App;
