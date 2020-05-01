import React from "react";

import logo from "./assets/img/logo.svg";
import "./App.css";

const { remote } = window.require("electron");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {["chrome", "node", "electron"].map((type) => {
            return (
              <p key={type}>
                {type} {remote.process.versions[type]}
              </p>
            );
          })}
        </div>
        <p>当前项目版本：1.1.0</p>
      </header>
    </div>
  );
}

export default App;
