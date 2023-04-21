import { TimerState } from "../models/typeModels";
import { actionModel } from "../models/typeModels";
import { TimerIncre } from "./Actions";

const initialState: TimerState = {
  secs: 0,
  mins: 0,
  hrs: 0,
};

export const TimerReducer = (
  state: TimerState = initialState,
  action: actionModel
): TimerState => {
  switch (action.type) {
    case TimerIncre.hrs:
      return {
        ...state,
        hrs: state.hrs + 1,
      };
    case TimerIncre.mins:
      return {
        ...state,
        mins: state.mins + 1,
      };
    case TimerIncre.secs:
      return {
        ...state,
        secs: state.secs + 1,
      };
    case TimerIncre.reset:
      return {
        mins: 0,
        hrs: 0,
        secs: 0,
      };

    default:
      return state;
  }
};
