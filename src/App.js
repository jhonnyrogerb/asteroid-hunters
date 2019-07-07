import React from "react";
import { connect } from "react-redux";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "~/containers/Home/Home";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={'/home'} component={Home}/>
        <Redirect to={'/home'} />
      </Switch>
    </HashRouter>
  );
};

const mapStateToProps = store => {
  return { store }
};

export default connect(mapStateToProps)(App);

