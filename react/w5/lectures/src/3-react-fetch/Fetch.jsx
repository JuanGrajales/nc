import React, { Component } from "react";

class Fetch extends Component {
  state = {
    posts: [],
    apodImage: "",
  };

  getRequest = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          posts: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  getApod = () => {
    const apiKey = "kfpGNxVIxLo5VDMFrnWz21pYKlVu23d9l6WmOXSH";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          apodImage: data.hdurl,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  displayPosts = () => {
    if (this.state.posts.length) {
      return this.state.posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      });
    } else {
      return <li>No posts</li>;
    }
  };

  render() {
    return (
      <>
        <h1>Fetch</h1>
        <button onClick={this.getRequest}>Projects</button>
        <ul>{this.displayPosts()}</ul>
        <button onClick={this.getApod}>APOD</button>
        <img src={this.state.apodImage} alt="apod" />
      </>
    );
  }
}

export default Fetch;
