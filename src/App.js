import React, { Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navigation from "./common/navigation/routes";

import * as Components from "./common/utils/componentImports"

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOnDifferentValues: true,
    logOwnerReasons: true,
    collapseGroups: false,
    onlyLogs: true
  });
}

function App() {
  useEffect(() => {
    Components.GitRepoPreload.preload()
    Components.CounterContainerPreload.preload()
    Components.UserListPreload.preload()
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
            <Route path="/git" component={Components.GitRepo} />
            <Route path="/users" component={Components.UserList} />
            <Route path="/counter" component={Components.CounterContainer} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Provider >
  );
}

export default App;
