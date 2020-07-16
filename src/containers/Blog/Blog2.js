import React, { Component } from "react";
import Courses from "../../components/Courses";
import Course from "../../components/Course";
import Users from "../../components/Users";
import NoMatch from "../../components/NoMatch";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class Blog2 extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul style={{ listStyle: "none", margin: "auto", padding: "0" }}>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users" component={Users} />
          {/* <Route path="/courses/:courseId" component={Course} /> */}
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default Blog2;
