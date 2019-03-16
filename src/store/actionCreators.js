import {
  SETPRESETS,
  COMPILE,
  RESET,
  UPDATEMENU,
  CHANGECODE,
  DISMISSERROR
} from "./actionType";

export const updateMenu = value => ({
  type: UPDATEMENU,
  value
});

export const setPresets = preset => ({
  type: SETPRESETS,
  preset
});

export const compile = value => ({
  type: COMPILE,
  value
});

export const reset = value => ({
  type: RESET,
  value
});

export const dismissError = value => ({
  type: DISMISSERROR,
  value
});

export const getChangeCode = code => ({
  type: CHANGECODE,
  code
});
