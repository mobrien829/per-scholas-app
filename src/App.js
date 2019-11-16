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
        <Route
          exact
          path="/"
          render={routerProps => <InfoPage {...routerProps} />}
        />
        <Route path="/softwareeng">
          <SoftwareEng />
        </Route>
      </Router>
    </div>
  );
}

export default App;
