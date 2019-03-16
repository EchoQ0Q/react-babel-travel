import React, { Component } from "react";
import store from "../../store/";
import "./style.scss";
import { dismissError } from "../../store/actionCreators";

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.getChangeState);
  }
  getChangeState = () => {
    const new_state = store.getState();
    this.setState(new_state);
    if (new_state.errorMsg) {
      setTimeout(() => {
        store.dispatch(dismissError());
      }, 3000);
    }
  };
  render() {
    const { errorMsg } = this.state;
    const display = errorMsg ? "block" : "none";
    return (
      <div className="error-wrap" style={{ display }}>
        <pre>{errorMsg}</pre>
        <p>Check console for more details</p>
      </div>
    );
  }
}

export default Error;
