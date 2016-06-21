/**
 * Action types
 */
export const SPIN_SPINNER = 'SPIN_SPINNER';
export const STOP_SPINNER = 'STOP_SPINNER';

/**
 * Action creators
 */
export const spinSpinner = () => {
  return { type: SPIN_SPINNER };
};

export const stopSpinner = () => {
  return { type: STOP_SPINNER };
};
