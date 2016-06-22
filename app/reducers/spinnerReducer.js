import { TOGGLE_SPINNER } from './../actions/actions';

export const spinnerReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_SPINNER:
      return { ...state, spinner: action.active };
    default:
      return state;
  }
};
