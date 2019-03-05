import React, { Component } from "react";

import Header from "./pages/header/";
import Menu from "./pages/menu/";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Menu />
          {/* <Editor></Editor> */}
        </div>
      </div>
    );
  }
}

export default App;
