import React, { Component } from "react";
import "./style.scss";
import { dismissError } from "../../store/actionCreators";
import { connect } from "react-redux";

class Error extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(){
    const { _dismissError , errorMsg} = this.props;
    if (!!errorMsg) {
      setTimeout(() => {
        _dismissError();
      }, 3000);
    }
  }

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

const mapState = state => {
  return {
    errorMsg: state.errorMsg
  }
};

const mapDispatch = dispatch => {
  return {
    _dismissError: () => {
      dispatch(dismissError());
    }
  }
}

export default connect(mapState, mapDispatch)(Error);
