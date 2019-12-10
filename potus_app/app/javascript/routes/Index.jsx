import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../components/Home";
import HeaderNav from "../components/Header"
import Confirmation from "../components/Confirmation"
import Footer from "../components/Footer"
import Unsubscribe from "../components/Unsubscribe";



export default (
  <Router>
    <div>
      <HeaderNav/>
      <Switch>

        <Route path="/confirm/:id" render={ props => 
          <div>
            <Confirmation {...props} />
            <Home/>
          </div>
        }/>

        <Route path="/unsubscribe/:id" render={ props =>
          <div>
            <Unsubscribe {...props} />
            <Home/>
          </div>
        }/>

        <Route path="/about" render={ props => 
          <div>
          </div>
        }/>


        <Route path="/" render={ props => 
          <div>
            <Home/>
          </div>
        }/>

        {/* <Redirect from='*' to='/'/> */}

      </Switch>
      <Footer/>
    </div>
  </Router>
);