import React, { Suspense, useEffect, useState, useContext } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navigation from "./common/navigation/routes";

import * as Components from "./common/utils/componentImports";
import { Select } from "./common/select/select";
import { LanguageContext, LanguageContextProvider } from "./context/Language";

import uuid from "react-uuid";
import { languageInfo } from "./common/constants";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    // trackAllPureComponents: true,
    // trackHooks: true,
    // logOnDifferentValues: true,
    // logOwnerReasons: true,
    // collapseGroups: false,
    // onlyLogs: true
  });
}

function App(props) {
  const [languagesInfo, setLanguages] = useState(languageInfo);

  // console.log(languagesInfo.selectedLanguage);

  useEffect(() => {
    Components.GitRepoPreload.preload();
    Components.CounterContainerPreload.preload();
    Components.UserListPreload.preload();
  }, []);

  function setLanguage(event) {
    const value = event.target.value;
    setLanguages((prevState) => ({ ...prevState, selectedLanguage: value }));
  }

  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <header>
          <h1>Github Reader</h1>
          <h2>Counter: Keep Counting</h2>
          <h3>Get Users List</h3>
        </header>
        <BrowserRouter>
          <LanguageContext.Provider value={languagesInfo}>
            <>
              <div> <span>Change Lanuage:</span> <Select
                key={uuid()}
                setLanguage={setLanguage}
                currentLanguage={languagesInfo.selectedLanguage}
              />
              </div>
              <Navigation />
              <Switch>
                <Route
                  path="/git"
                  render={() => (
                    <Components.GitRepo />
                  )}
                />
                <Route path="/users" component={Components.UserList} />
                <Route
                  path="/counter"
                  component={Components.CounterContainer}
                />
                <Redirect to="/" />
              </Switch>
            </>
          </LanguageContext.Provider>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
