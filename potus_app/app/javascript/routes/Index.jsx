import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
// import UnverifiedForm from "../components/UnverifiedForm"

export default (
  <Router>
    <Switch>
      <Route path="/" render={ props => 
        <div>
          <Home/>
        </div>
      }/>


    </Switch>
  </Router>
);