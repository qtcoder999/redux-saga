import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as Components from "../common/utils/componentImports";
import Navigation from "./navigation/navigation";

export const Routes = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/git" component={Components.GitRepo} />
      <Route path="/users" component={Components.UserList} />
      <Route path="/counter" component={Components.CounterContainer} />
      <Route path="/cra" component={Components.CRAReleases} />
      <Route path="/timer" component={Components.VirtualDomTimer} />
      <Route path="/movie" component={Components.MovieSearch} />
      <Route path="/weather" component={Components.Weather} />
      <Redirect to="/git" />
    </Switch>
  </BrowserRouter>
);
