import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";
import CounterContainer from "./containers/counter/counter-container";
import GitRepo from "./containers/git-repo/gitRepoContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <CounterContainer /> */}
          <GitRepo />
        </header>
      </div>
    </Provider>
  );
}

export default App;
