import { SPIN_SPINNER, STOP_SPINNER } from './../actions/actions';

export const spinnerReducer = (state = {}, action) => {
  switch (action.type) {
    case SPIN_SPINNER:
      return { ...state, spinner: true };
    case STOP_SPINNER:
      return { ...state, spinner: false };
    default:
      return state;
  }
};
