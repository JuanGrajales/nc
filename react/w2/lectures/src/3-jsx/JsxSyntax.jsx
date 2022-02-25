import React, { Component } from "react";

class JsxSyntax extends Component {
  render() {
    const userIsLoggedIn = true;
    const str = "hi";
    return (
      <div>
        <h1>What is JSX?</h1>
        <p>
          Pretty much looks like HTML except that you can embed JS inside of it
        </p>

        <div>HTML: 3 + 5</div>
        <div>JSX: {3 + 5}</div>
        <br />

        <div>HTML: str + " hello"</div>
        <div>JSX: {str + " hello"}</div>
        <br />

        <div>HTML: 5 &lt; 1 ? "true" : "false"</div>
        <div>JSX: {5 > 1 ? "true" : "false"}</div>
        {/* ternary operator */}
        <br />

        <div>HTML: userIsLoggedIn ? "Hi Juan" : "Login Here"</div>
        <div>JSX: {userIsLoggedIn ? "Hi Juan" : "Login Here"}</div>
        <br />
      </div>
    );
  }
}
// if(condition){
//   // do something if true
// } else {
//   // do something else if false
// }
export default JsxSyntax;
