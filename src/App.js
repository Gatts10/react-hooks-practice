import React from 'react'
import logo from "./logo.svg";
import "./App.css";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import DataFetchingById from "./components/DataFetchingById";
import ComponentA from "./components/ComponentA";

export const UserContext = React.createContext();
export const WorkContext = React.createContext();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {/* <ClassCounter /> */}
          {/* <HookCounter /> */}
          <HookCounterTwo />
          <br />
          <HookCounterThree />
          <br />
          <HookCounterFour />
          <br />
          <HookCounterOne />
          <br />
          <MouseContainer />
          <br />
          <IntervalHookCounter />
          <br />
          <DataFetching />
          <br />
          <DataFetchingById />
          <br />
          <UserContext.Provider value={"Orlando"}>
            <WorkContext.Provider value={"Remote"}>
              <ComponentA /><br />
            </WorkContext.Provider>
          </UserContext.Provider>
        </div>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: 25 }}
        >
          Learn React{" "}
        </a>{" "}
      </header>
    </div>
  );
}

export default App;
