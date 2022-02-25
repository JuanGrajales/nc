import React, { Component } from "react";

class Ternary extends Component {
  state = {
    user: "",
  };

  login = () => {
    this.setState({ user: "Juan" });
  };

  logout = () => {
    this.setState({ user: "" });
  };

  render() {
    // if (this.state.user !== '') {
    // if (this.state.user) {
    //   return (
    //     <div>
    //       <h1>Ternary</h1>
    //       <h3>Welcome {this.state.user}</h3>
    //       <button onClick={this.logout}>Logout</button>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Ternary</h1>
    //       <h3>Welcome</h3>
    //       <button onClick={this.login}>Login</button>
    //     </div>
    //   );
    // }
    return (
      <div>
        <h1>Ternary</h1>
        <h3>Welcome {this.state.user ? this.state.user : "User"}</h3>
        <button onClick={this.state.user ? this.logout : this.login}>
          {this.state.user ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}

// if(this.state.user){
//   return "Logout"
// } else {
//   return "Login"
// }

export default Ternary;
