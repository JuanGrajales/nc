import React, { Component } from "react";

class Mapping extends Component {
  state = {
    namesArr: ["Juan", "Jess", "Jaime", "Jax", "Tiff", "Coco"],
    // namesArr: ["<li>Juan</li>", "<li>Jess</li>", "<li>Jaime</li>", "<li>Jax</li>", "<li>Tiff</li>", "<li>Coco</li>",,
  };

  // Display array using function and map

  render() {
    return (
      <div>
        <ol>
          <li>{this.state.namesArr[0]}</li>
          <li>{this.state.namesArr[1]}</li>
          <li>{this.state.namesArr[2]}</li>
          <li>{this.state.namesArr[3]}</li>
          <li>{this.state.namesArr[4]}</li>
          <li>{this.state.namesArr[5]}</li>
        </ol>

        <ul>
          {this.state.namesArr.map((name, index) => {
            return (
              <li key={index}>
                <h1>{name}</h1>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Mapping;
