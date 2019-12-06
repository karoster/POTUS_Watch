import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../components/Home";
import HeaderNav from "../components/Header"
import Confirmation from "../components/Confirmation"



export default (
  <Router>
    <div>
      <Switch>

        <Route path="/confirm/:id" render={ props => 
          <div>
            <HeaderNav/>
            <Confirmation {...props} />
            <Home/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        }/>


        <Route path="/about" render={ props => 
          <div>

          </div>
        }/>


        <Route path="/" render={ props => 
          <div>
            <HeaderNav/>

            <Home/>
          </div>
        }/>

        

        {/* <Redirect from='*' to='/'/> */}
        


      </Switch>
    </div>
  </Router>
);