import React from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";

import Home from "~/containers/Home/Home";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={'/home'} component={Home}/>
        <Redirect to={'/home'} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;

