import React, { Component } from "react";
import { BabelContext } from "./context";

export default Comp =>
  class extends Component {
    render() {
      return (
        <BabelContext.Consumer>
          {value => <Comp {...value} {...this.props} />}
        </BabelContext.Consumer>
      );
    }
  };
