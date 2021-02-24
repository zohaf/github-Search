import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route } from "react-router-dom";

import App from "./components/App";
import Search from "./components/Search";
import Profile from "./components/Profile";

//not a component
const Routes = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route path="/details/:username" component={Profile} />
  </Router>
);

ReactDOM.render(Routes, document.body);
