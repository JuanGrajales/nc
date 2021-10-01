import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Jess from "./Jess";
import Juan from "./Juan";
import Profile from "./Profile";

class RouterParams extends Component {
  state = {
    users: ["juan", "jess", "jax", "roy"],
  };
  render() {
    return (
      <BrowserRouter>
        <h2>Nav</h2>
        <ul>
          {/* <li>
            <Link to="/juan">Juan Profile</Link>
          </li>
          <li>
            <Link to="/jess">Jess Profile</Link>
          </li> */}
          <li>
            <Link to="/profile/jess">Profile Jess</Link>
          </li>
          <li>
            <Link to="/profile/juan">Profile Juan</Link>
          </li>
        </ul>
        <h2>Switch will choose the route that has the path matching the url</h2>
        <Switch>
          <Route exact path="/juan" render={() => <Juan />} />
          <Route exact path="/jess" render={() => <Jess />} />
          <Route
            exact
            path="/profile/:user"
            render={(props) => <Profile {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
// let anything = 'Juan'
export default RouterParams;
