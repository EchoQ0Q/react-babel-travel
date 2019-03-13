import React, { Component } from "react";

import { Button } from "antd";
import "./style.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checks: []
    };
  }

  render() {
    const { option, setPresets, presets } = this.props;
    return (
      <div className="header-wrap">
        <p>ES6编译器</p>
        <div>
          <div className="check-types">
            {option.map(preset => (
              <p key={preset}>
                <input
                  type="checkbox"
                  id={preset}
                  checked={presets.includes(preset)}
                  onChange={ev => setPresets(preset)}
                />
                <label htmlFor={preset}>{preset}</label>
              </p>
            ))}
          </div>
          <div className="type-btns">
            <Button type="primary" onClick={this.props.compile}>
              Compile
            </Button>
            <Button onClick={this.props.reset}>Reset</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
