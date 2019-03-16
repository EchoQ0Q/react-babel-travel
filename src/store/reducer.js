<<<<<<< HEAD
import { COMPILE } from "./actionTypes";
const Babel = require("babel-standalone");
=======
import {SETPRESETS, COMPILE, RESET, UPDATEMENU , CHANGECODE, DISMISSERROR} from './actionType';
import menus from "../example/";

const Babel = require("babel-standalone");

>>>>>>> origin/redux
const defaultState = {
  code: "class Foo{}",
  result: "",
  errorMsg: "",
  menu: "",
<<<<<<< HEAD
  options: ["es2015"],
  presets: ["es2015", "stage-0", "stage-1", "stage-2", "stage-3"]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case COMPILE:
      break;
=======
  presets: ["es2015"],
};

export default (state = defaultState, action) => {
  switch(action.type){
    case SETPRESETS:
    {
      const { presets } = state;
      const { value } = action;
      presets.includes(value)
      ? presets.splice(presets.indexOf(value), 1)
      : presets.push(value);
      return {...state, presets};
    }
    case COMPILE:
    {
      const { presets, code } = state;
      let compileCode = "";
      try {
        compileCode = Babel.transform(code, { presets: [...presets] }).code;
        return {...state, result: compileCode }
      } catch ({codeFrame}) {
        return { ...state, errorMsg: codeFrame };
      } 
    } 
    case RESET:
    {
      const { menu } = state;
      if (menu) {
        return { ...state, code: menus[menu], result: "" };
      } else {
        return { ...state, code: defaultState.code, result: "" };
      }
    }
    case UPDATEMENU: 
    {
      const menu = action.value;
      const code = menus[menu];
      return {...state, menu, code, result: ""};
    }
    case CHANGECODE: 
    {
      const code = action.value;
      return {...state, code};
    }
    case DISMISSERROR: 
    {
      return {...state, errorMsg: void 0}
    }
>>>>>>> origin/redux
  }
  return state;
};
