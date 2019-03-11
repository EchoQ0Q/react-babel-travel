import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/eclipse.css";

import "./style.scss";

const Babel = require("babel-standalone");

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `const func = data => console.log(123)`
    };
  }

  changeCode = code => {
    const codeVal = code.getValue();
    this.setState({
      code: Babel.transform(codeVal, { presets: ["es2015"] }).code
    });
  };

  render() {
    const { code } = this.state;
    return (
      <div>
        <CodeMirror
          value={code}
          options={{
            mode: "javascript",
            tabSize: 2,
            lineNumbers: true
          }}
          onChange={code => this.changeCode(code)}
        />
      </div>
    );
  }
}
