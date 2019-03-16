import menus from "../example/";

const Babel = require("babel-standalone");

const defaultState = {
  code: "class Foo{}",
  result: "",
  errorMsg: "",
  menu: "",
  presets: ["es2015"]
};

export default (state = defaultState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "set-presets": {
      const { presets } = state;
      const { value } = action;
      presets.includes(value)
        ? presets.splice(presets.indexOf(value), 1)
        : presets.push(value);
      return { ...state, presets };
    }
    case "compile": {
      const { presets, code } = state;
      let compileCode = "";
      try {
        compileCode = Babel.transform(code, { presets: [...presets] }).code;
        return { ...state, result: compileCode };
      } catch ({ codeFrame }) {
        return { ...state, errorMsg: codeFrame };
      }
    }
    case "reset": {
      const { menu } = state;
      if (menu) {
        return { ...state, code: menus[menu], result: "" };
      } else {
        return { ...state, code: defaultState.code, result: "" };
      }
    }
    case "update-menu": {
      const menu = action.value;
      const code = menus[menu];
      return { ...state, menu, code, result: "" };
    }
    case "change-code": {
      const { code } = action;
      return { ...state, code };
    }
    case "dismiss-error": {
      return { ...state, errorMsg: void 0 };
    }
  }
  return state;
};
