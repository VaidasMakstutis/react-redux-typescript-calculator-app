import { ADD } from "../types";
import { DIFF } from "../types";
import { MULT } from "../types";
import { DIV } from "../types";

export const actionAdd = (payload: { d1: number; d2: number }) => {
  return {
    type: ADD,
    payload: payload
  };
};

export const actionDiff = (payload: { d1: number; d2: number }) => {
  return {
    type: DIFF,
    payload: payload
  };
};

export const actionMult = (payload: { d1: number; d2: number }) => {
  return {
    type: MULT,
    payload: payload
  };
};

export const actionDiv = (payload: { d1: number; d2: number }) => {
  return {
    type: DIV,
    payload: payload
  };
};
