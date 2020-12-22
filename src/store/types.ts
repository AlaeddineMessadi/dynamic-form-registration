import { DataField } from "../common/types";

//  TYPES
export const ADD_DATA = "ADD_DATA";
export const SET_STEP = "SET_STEP";

interface AddDataAction {
  type: typeof ADD_DATA;
  payload: DataField | DataField[];
}
interface SetStepAction {
  type: typeof SET_STEP;
  payload: number;
}

export type LoadInitialActionTypes = AddDataAction | SetStepAction;
