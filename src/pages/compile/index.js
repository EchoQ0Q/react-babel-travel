import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/eclipse.css";
import { connect } from "react-redux";

const Compile = props => {
  const { result } = props;
  return (
    <div>
      <CodeMirror
        value={result}
        options={{
          mode: "javascript",
          tabSize: 2,
          lineNumbers: true
        }}
      />
    </div>
  );
};

const mapState = state => {
  return {
    result: state.result
  };
};

export default connect(
  mapState,
  null
)(Compile);
