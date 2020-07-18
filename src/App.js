import React, { Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";
import CounterContainer from "./containers/counter/counter-container";
const GitRepo = React.lazy(() =>
  import("./containers/git-repo/gitRepoContainer")
);
// const CounterContainer = React.lazy(() =>
//   import("./containers/counter/counter-container")
// );

function App() {
  return (
    <Provider store={store}>
      {/* <header>
        <h1>
          Github Reader
      </h1>
        <h2>
          Observe all the users lists
        </h2>
        <h3>
          Take a look at their repos!
        </h3>
      </header> */}

      <div className="App">
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <CounterContainer />
        {/* <GitRepo /> */}
        {/* </Suspense> */}
      </div>
    </Provider>
  );
}

export default App;
