import { DataField } from "../common/types";
import { ADD_DATA, SUBMIT, LoadInitialActionTypes } from "./types";

export function addDataFieldAction(data: DataField): LoadInitialActionTypes {
  return {
    type: ADD_DATA,
    payload: data,
  };
}

export function submitAction(data: boolean): LoadInitialActionTypes {
  return {
    type: SUBMIT,
    payload: data,
  };
}
