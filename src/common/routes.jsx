import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import * as Components from "../common/utils/componentImports";

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/git" component={Components.GitRepo} />
            <Route path="/users" component={Components.UserList} />
            <Route path="/counter" component={Components.CounterContainer} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);