import { COMPILE } from "./actionTypes";
const Babel = require("babel-standalone");
const defaultState = {
  code: "class Foo{}",
  result: "",
  errorMsg: "",
  menu: "",
  options: ["es2015"],
  presets: ["es2015", "stage-0", "stage-1", "stage-2", "stage-3"]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case COMPILE:
      break;
  }
  return state;
};
