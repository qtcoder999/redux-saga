import React, { Suspense, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";

import Navigation from "./common/navigation/navigation";

import * as Components from "./common/utils/componentImports";
import { LanguageContext } from "./context/Language";

import { languageInfo } from "./common/constants";
import { Header } from "./common/header/header";
import { LanguageSelector } from "./components/language-selector/language-selector";
import { Routes } from "./common/routes";

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

function App() {
  const [languagesInfo, setLanguages] = useState(languageInfo);

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
        <Header />
        <LanguageContext.Provider value={languagesInfo}>
          <LanguageSelector setLanguage={setLanguage} selectedLanguage={languagesInfo.selectedLanguage}></LanguageSelector>
          <Navigation />
          <Routes />
        </LanguageContext.Provider>
      </Suspense>
    </Provider>
  );
}

export default App;
