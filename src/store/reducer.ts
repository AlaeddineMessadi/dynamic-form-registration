import { ADD_DATA, LoadInitialActionTypes } from "./types";
import { IAppState } from "../common/types";

const initialState: IAppState = { data: {} };

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
    default:
      return state;
  }
};
