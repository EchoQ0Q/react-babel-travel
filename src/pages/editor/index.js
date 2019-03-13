import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/eclipse.css";

import "./style.scss";
class Editor extends Component {
  codeChange = ev => {
    const code = ev.getValue();
    this.props.changeCode(code);
  };

  render() {
    const { code } = this.props;
    return (
      <div>
        <CodeMirror
          value={code}
          options={{
            mode: "javascript",
            tabSize: 2,
            lineNumbers: true
          }}
          onChange={this.codeChange}
        />
      </div>
    );
  }
}

export default Editor;
