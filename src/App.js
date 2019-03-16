import React, { Component } from "react";
import Header from "./pages/header/";
import Menu from "./pages/menu/";
import Editor from "./pages/editor/";
import Compile from "./pages/compile/";
import Error from "./pages/error/";

import "./App.scss";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Menu />
          <div className="editors">
            <Editor />
            <Compile />
            <Error />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
