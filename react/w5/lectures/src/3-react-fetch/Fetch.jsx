import React, { Component } from "react";

class Fetch extends Component {
  state = {
    posts: [],
    apod: "",
  };

  getRequest = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET",
    })
      // .then((response) => response.json())
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        const limitDataArray = data.slice(0, 10);
        this.setState({
          posts: limitDataArray,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  getApod = () => {
    const url =
      "https://api.nasa.gov/planetary/apod?api_key=Ub9yx09x1YGzJ866ydoppJ1yTbZc0jnZQbcTviFS";

    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          apod: data.url,
        });
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
        {/* <button onClick={this.getRequest}>Projects</button>
        <ul>{this.displayPosts()}</ul> */}
        <button onClick={this.getApod}>Get APOD</button>
        <div>
          <img src={this.state.apod} alt="apod image" />
        </div>
      </>
    );
  }
}

export default Fetch;
