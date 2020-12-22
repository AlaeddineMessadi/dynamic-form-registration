import { DataField } from "../common/types";

//  TYPES
export const ADD_DATA = "ADD_DATA";
export const SUBMIT = "SUBMIT";

interface AddDataAction {
  type: typeof ADD_DATA;
  payload: DataField;
}
interface SubmitAction {
  type: typeof SUBMIT;
  payload: boolean;
}

export type LoadInitialActionTypes = AddDataAction | SubmitAction;
