import React, { Component } from "react";
import "./style.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-wrap">
        <p>ES6编译器</p>
        <div>
          <div className="check-types">
            <p>
              <input type="checkbox" id="es2015" />
              <label htmlFor="es2015">es2015</label>
            </p>
            <p>
              <input type="checkbox" id="stage-0" />
              <label htmlFor="stage-0">stage-0</label>
            </p>
            <p>
              <input type="checkbox" id="stage-1" />
              <label htmlFor="stage-1">stage-1</label>
            </p>
            <p>
              <input type="checkbox" id="stage-2" />
              <label htmlFor="stage-2">stage-2</label>
            </p>
            <p>
              <input type="checkbox" id="stage-3" />
              <label htmlFor="stage-3">stage-3</label>
            </p>
          </div>
          <div className="type-btns">
            <button>Compile</button>
            <button>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}
