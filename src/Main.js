import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./Home";
import Report from "./Report";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Laundry</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/report">Report</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/report" component={Report}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;

// vim: set ts=2 sw=2 expandtab:
