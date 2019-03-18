import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/eclipse.css";
import { getChangeCode } from "../../store/actionCreators";
import { connect } from "react-redux";

import "./style.scss";
class Editor extends Component {

  codeChange = ev => {
    const code = ev.getValue();
    this.props.codeChange(code);
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

const mapState = state => {
  return {
    code: state.code
  }
};

const mapDispatch = dispatch => {
  return {
    codeChange: code => {
      dispatch(getChangeCode(code));
    }
  }
};

export default connect(mapState, mapDispatch)(Editor);
