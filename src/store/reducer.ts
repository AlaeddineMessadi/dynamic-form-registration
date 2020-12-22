import { ADD_DATA, SUBMIT, LoadInitialActionTypes } from "./types";
// import { IAppState } from "../common/types";

export interface IAppState {
  data: any;
  submit: boolean;
}

const initialState: IAppState = { data: {}, submit: false };

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
    case SUBMIT:
      return {
        ...state,
        submit: action.payload,
      };
    default:
      return state;
  }
};
