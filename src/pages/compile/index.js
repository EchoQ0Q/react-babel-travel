import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/eclipse.css";
import store from '../../store/';

class Compile extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    store.subscribe(this.getStateChange);
  }
  getStateChange = () => {
    this.setState({
      ...store.getState()
    })
  }
  render() {
    const { result } = this.state;
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

export default Compile;
