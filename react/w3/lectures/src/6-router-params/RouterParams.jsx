import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Jess from "./Jess";
import Juan from "./Juan";
import Profile from "./Profile";

class RouterParams extends Component {
  state = {
    users: ["juan", "jess", "jax", "roy"],
    shahlo: [
      {
        name: "juan",
        id: "1",
      },
      {
        name: "jess",
        id: "12",
      },
      {
        name: "jax",
        id: "13",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique minus laudantium rem, ducimus autem, iusto laborum, excepturi cumque fugiat perspiciatis possimus eos modi hic. Expedita odit laudantium fuga necessitatibus?",
        posts: ["post1", "post2", "post3"],
      },
      {
        name: "roy",
        id: "14",
      },
    ],
  };

  displayUserLinksshahlo = () => {
    // return this.state.shahlo.map(({ name, id }) => {
    return this.state.shahlo.map((user) => {
      return (
        <li>
          <Link to={`/profile/${user.id}`}>{user.name}</Link>
        </li>
      );
    });
  };

  displayUserLinks = () => {
    return this.state.users.map((user) => {
      return (
        <li>
          <Link to={`/profile/${user}`}>{user}</Link>
        </li>
      );
    });
  };

  render() {
    return (
      <BrowserRouter>
        <h1>Nav</h1>
        <p>
          Anything outside of the Switch component will always show no matter
          what the URL
        </p>
        <ul>
          <li>
            <Link to="/juan">Juan Profile</Link>
          </li>
          <li>
            <Link to="/jess">Jess Profile</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {/* {this.displayUserLinks()} */}
          {this.displayUserLinksshahlo()}
        </ul>
        <p>Switch will choose the route that has the path matching the url</p>
        <Switch>
          <Route exact path="/juan" render={() => <Juan />} />
          <Route exact path="/jess" render={() => <Jess />} />
          {/* <Route
            exact
            path="/profile/:user"
            render={(props) => <Profile match={props.match} />}
          /> */}
          <Route
            exact
            path="/profile/:id"
            render={(props) => (
              <Profile match={props.match} users={this.state.shahlo} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterParams;
