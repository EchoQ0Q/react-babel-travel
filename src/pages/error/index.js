import React, { Component } from "react";

import "./style.scss";

class Error extends Component {
  render() {
    const { errorMsg } = this.props;
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
