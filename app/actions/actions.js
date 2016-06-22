/**
 * Action types
 */
export const TOGGLE_SPINNER = 'TOGGLE_SPINNER';

/**
 * Action creators
 */
export const toggleSpinner = (active) => {
  return { type: TOGGLE_SPINNER, active: active };
};
