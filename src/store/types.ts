import { DataField } from "../common/types";

//  TYPES
export const ADD_DATA = "ADD_DATA";

interface AddDataAction {
  type: typeof ADD_DATA;
  payload: DataField;
}

export type LoadInitialActionTypes = AddDataAction;
