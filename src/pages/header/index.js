import React, { Component } from "react";
import { Button } from "antd";
// import store from "../../store/";
import { setPresets, compile, reset } from "../../store/actionCreators";
import "./style.scss";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.option = ["es2015", "stage-0", "stage-1", "stage-2", "stage-3"];
  }

  render() {
    const { presets } = this.props;
    return (
      <div className="header-wrap">
        <p>ES6编译器</p>
        <div>
          <div className="check-types">
            {this.option.map(preset => (
              <p key={preset}>
                <label htmlFor={preset}>
                  {preset}
                  <input
                    type="checkbox"
                    id={preset}
                    checked={presets.includes(preset)}
                    onChange={ev => this.props._setPresets(preset)}
                  />
                </label>
              </p>
            ))}
          </div>
          <div className="type-btns">
            <Button type="primary" onClick={this.props._compile}>
              Compile
            </Button>
            <Button onClick={this.props._reset}>Reset</Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapState = state => {
  return {
    presets: state.presets
  }
};

const mapDispatch = dispatch => {
  return {
    _setPresets: function(preset){
      dispatch(setPresets(preset));
    },
    _reset: function(){
      dispatch(reset());
    },
    _compile: function(){
      dispatch(compile());
    }
  }
};

export default connect(mapState, mapDispatch)(Header);
