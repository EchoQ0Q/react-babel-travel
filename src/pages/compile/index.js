import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/eclipse.css";

export default class Compile extends Component {
  render() {
    const { code } = this.props;
    return (
      <div>
        <CodeMirror
          ref="editor"
          value={code}
          options={{
            mode: "javascript",
            tabSize: 2,
            lineNumbers: true
          }}
        />
      </div>
    );
  }
}
