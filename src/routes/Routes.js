import React, {Fragment} from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Footer from '../pages/layouts/Footer'
import { Blog } from "../pages/Blog";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={SignUp} exact />
        </Switch>
        <Footer/>
      </Router>
    </Fragment>
  )
}

export default Routes;