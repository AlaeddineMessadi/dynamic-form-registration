import { ADD_DATA, SET_STEP, LoadInitialActionTypes, SET_WIDTH } from "./types";
import { IAppState } from "../common/types";

const initialState: IAppState = { data: {}, step: 0, width: 0 };

export const reducer = (
  state = initialState,
  action: LoadInitialActionTypes
) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case SET_WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    default:
      return state;
  }
};
