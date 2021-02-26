import { DataField } from "../common/types";

//  TYPES
export const ADD_DATA = "ADD_DATA";
export const SET_STEP = "SET_STEP";
export const SET_WIDTH = "SET_WIDTH";

interface AddDataAction {
  type: typeof ADD_DATA;
  payload: DataField | DataField[];
}
interface SetStepAction {
  type: typeof SET_STEP;
  payload: number;
}
interface SetWidthAction {
  type: typeof SET_WIDTH;
  payload: number;
}

export type LoadInitialActionTypes =
  | AddDataAction
  | SetStepAction
  | SetWidthAction;
