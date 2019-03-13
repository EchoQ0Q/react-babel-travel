import React, { Component } from "react";
import menus from "./example/";
const Babel = require("babel-standalone");

const defaultValue = {
  code: "class Foo{}",
  option: ["es2015", "stage-0", "stage-1", "stage-2", "stage-3"],
  result: "",
  error: ""
};

export const BabelContext = React.createContext(defaultValue);

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "class Foo{}",
      result: "",
      errorMsg: "",
      menu: "",
      presets: ["es2015"]
    };
  }
  compile = () => {
    const { code, presets } = this.state;
    let compileCode = "";
    try {
      compileCode = Babel.transform(code, { presets: [...presets] }).code;
      this.setState({
        result: compileCode
      });
    } catch (err) {
      this.error(err);
    }
  };

  error = ({ codeFrame }) => {
    this.setState({
      errorMsg: codeFrame
    });

    setTimeout(() => {
      this.setState({
        errorMsg: void 0
      });
    }, 3000);
  };

  setPresets = preset => {
    this.setState(({ presets }) => {
      presets.includes(preset)
        ? presets.splice(presets.indexOf(preset), 1)
        : presets.push(preset);
      return { presets };
    });
  };

  updateMenu = menu => {
    const code = menus[menu];
    this.setState({
      menu,
      code,
      result: ""
    });
  };

  reset = () => {
    const { menu } = this.state;
    if (menu) {
      this.setState({
        code: menus[menu],
        result: ""
      });
    } else {
      debugger;
      this.setState({
        code: defaultValue.code,
        result: ""
      });
    }
  };

  changeCode = code => {
    this.setState({
      code
    });
  };

  render() {
    const { state, ...func } = this;
    const value = { ...func, ...state, option: defaultValue.option };
    return (
      <BabelContext.Provider value={value}>
        {this.props.children}
      </BabelContext.Provider>
    );
  }
}
