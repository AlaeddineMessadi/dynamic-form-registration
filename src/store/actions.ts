import { DataField } from "../common/types";
import { ADD_DATA, SET_STEP, LoadInitialActionTypes, SET_WIDTH } from "./types";

export function addDataFieldAction(
  data: DataField | DataField[]
): LoadInitialActionTypes {
  return {
    type: ADD_DATA,
    payload: data,
  };
}

export function setStepAction(step: number): LoadInitialActionTypes {
  return {
    type: SET_STEP,
    payload: step,
  };
}

export function setWidthAction(width: number): LoadInitialActionTypes {
  return {
    type: SET_WIDTH,
    payload: width,
  };
}
