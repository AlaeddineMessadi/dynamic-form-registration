import { ADD_DATA, SET_STEP, LoadInitialActionTypes } from "./types";
import { IAppState } from "../common/types";

const initialState: IAppState = { data: {}, step: 0 };

export const reducer = (
  state = initialState,
  action: LoadInitialActionTypes
) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: {
          [action.payload.name]: {
            value: action.payload.value,
          },
        },
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
