import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navigation from "./common/navigation/routes";
import { ReactLazyPreload } from "./common/utils";

const GitRepo = React.lazy(() =>
  import("./containers/git-repo/gitRepoContainer")
);
const CounterContainer = React.lazy(() =>
  import("./containers/counter/counter-container")
);
const UserList = React.lazy(() => import("./containers/users/user-list"));

const GitRepoPreload = ReactLazyPreload(() =>
  import("./containers/git-repo/gitRepoContainer")
);
const CounterContainerPreload = ReactLazyPreload(() =>
  import("./containers/counter/counter-container")
);
const UserListPreload = ReactLazyPreload(() =>
  import("./containers/users/user-list")
);

function App() {
  useEffect(() => {
    setTimeout(() => {
      GitRepoPreload.preload();
      CounterContainerPreload.preload();
      UserListPreload.preload();
    }, 2000);
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
            <Route path="/git" component={GitRepo} />
            <Route path="/users" component={UserList} />
            <Route path="/counter" component={CounterContainer} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
