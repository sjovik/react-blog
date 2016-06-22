import { TOGGLE_SPINNER } from './../actions/actions';

export const spinner = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SPINNER:
      return action.active;
    default:
      return state;
  }
};
