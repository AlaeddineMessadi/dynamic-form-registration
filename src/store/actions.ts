import { DataField } from "../common/types";
import { ADD_DATA, LoadInitialActionTypes } from "./types";

export function addDataFieldAction(data: DataField): LoadInitialActionTypes {
  return {
    type: ADD_DATA,
    payload: data,
  };
}
