import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../components/Home";
import HeaderNav from "../components/Header"
import Confirmation from "../components/Confirmation"
import Footer from "../components/Footer"



export default (
  <Router>
    <div>
      <Switch>

        <Route path="/confirm/:id" render={ props => 
          <div>
            <HeaderNav/>
            <Confirmation {...props} />
            <Home/>
            <Footer/>
          </div>
        }/>


        <Route path="/about" render={ props => 
          <div>
            <Footer/>
          </div>
        }/>


        <Route path="/" render={ props => 
          <div>
            <HeaderNav/>
            <Home/>
            <Footer/>
          </div>
        }/>

        

        {/* <Redirect from='*' to='/'/> */}
        


      </Switch>
    </div>
  </Router>
);