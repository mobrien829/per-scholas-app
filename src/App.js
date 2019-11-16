import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InfoPage from "./InfoPage.js";
import SoftwareEng from "./SoftwareEng.js";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Route exact path="/">
          <InfoPage />
        </Route>
        <Route path="/softwareeng">
          <SoftwareEng />
        </Route>
      </Router>
    </div>
  );
}

export default App;
