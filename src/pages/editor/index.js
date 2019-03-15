import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/eclipse.css";
import store from '../../store/';

import "./style.scss";
class Editor extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    store.subscribe(this.getChangeState);
  }

  getChangeState = () => {
    this.setState({...store.getState()});
  }

  codeChange = ev => {
    const code = ev.getValue();
    store.dispatch({
      type: 'change-code',
      value: code
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
          onChange={this.codeChange}
        />
      </div>
    );
  }
}

export default Editor;
