import React, { Component } from "react";
import { Button } from "antd";
import store from "../../store/";
import { setPresets, compile, reset } from "../../store/actionCreators";
import "./style.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.option = ["es2015", "stage-0", "stage-1", "stage-2", "stage-3"];
    this.state = store.getState();
    store.subscribe(this.getStateChange);
  }

  getStateChange = () => {
    this.setState({
      ...store.getState()
    });
  };

  setPresets = preset => {
    store.dispatch(setPresets(preset));
  };

  compile = () => {
    store.dispatch(compile());
  };

  reset = () => {
    store.dispatch(reset());
  };

  render() {
    const { presets } = this.state;
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
                    onChange={ev => this.setPresets(preset)}
                  />
                </label>
              </p>
            ))}
          </div>
          <div className="type-btns">
            <Button type="primary" onClick={this.compile}>
              Compile
            </Button>
            <Button onClick={this.reset}>Reset</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
