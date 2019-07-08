import React from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";

import Home from "~/containers/Home/Home";
import Feed from "./containers/Feed/Feed";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
      <Route path={'/feed'} component={Feed}/>
        <Route path={'/home'} component={Home}/>
        <Redirect to={'/feed'} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;

