import React, { Suspense, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";
import { LanguageContext } from "./context/Language";
import { languageInfo } from "./common/constants";
import { Header } from "./common/header/header";
import { LanguageSelector } from "./components/language-selector/language-selector";
import { Routes } from "./common/routes";
import { usePreloading } from "./common/utils/customHooks";

function App() {
  const [languagesInfo, setLanguages] = useState(languageInfo);

  // usePreloading();

  function setLanguage(event) {
    const value = event.target.value;
    setLanguages((prevState) => ({ ...prevState, selectedLanguage: value }));
  }

  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <LanguageContext.Provider value={languagesInfo}>
          <Header />
          <LanguageSelector
            setLanguage={setLanguage}
            selectedLanguage={languagesInfo.selectedLanguage}
          />
          <Routes />
        </LanguageContext.Provider>
      </Suspense>
    </Provider>
  );
}
export default App;
