import React, { Component } from "react";
import connect from "../../connect";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/eclipse.css";

class Compile extends Component {
  render() {
    const { result } = this.props;
    return (
      <div>
        <CodeMirror
          ref="editor"
          value={result}
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

export default connect(Compile);
