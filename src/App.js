import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navigation from "./common/navigation/routes";

import * as Component from "./common/componentImports"

function App() {
  useEffect(() => {
    Component.GitRepoPreload.preload()
    Component.CounterContainerPreload.preload()
    Component.UserListPreload.preload()
  }, []);

  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <header>
          <h1>Github Reader</h1>
          <h2>Counter: Keep Counting</h2>
          <h3>Get Users List</h3>
        </header>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/git" render={() => <div><Component.GitRepo /></div>} />
            <Route path="/users" render={() => <div><Component.UserList /></div>} />
            <Route path="/counter" render={() => <div><Component.CounterContainer /></div>} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Provider >
  );
}

export default App;
