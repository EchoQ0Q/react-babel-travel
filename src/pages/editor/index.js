import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/eclipse.css";

import "./style.scss";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "hello world!"
    };
  }

  changeCode = code => {
    this.setState({
      code: code.getValue()
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
