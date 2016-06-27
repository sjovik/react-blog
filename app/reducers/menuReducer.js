import { TOGGLE_MENU, TOGGLE_SUBMENU } from './../actions/actions';

const defaultState = {
  open: false,
  subMenus: []
};

// TEST: See if this is immutable.
export const menu = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {...state, open: action.isOpen };
    
    case TOGGLE_SUBMENU:
      return {...state, subMenus: subMenus(state.subMenus, action) };
    
    default:
      return state;
  }
};


const subMenus = (state, action) => {
  switch (action.type) {
    case TOGGLE_SUBMENU: {
      const foundIndex = state.indexOf(action.subMenu);

      return (
        foundIndex > -1 ? 
          state.filter(item => item != state[foundIndex]) : 
          [...state, action.subMenu]
      );
    }

    default:
      return state;
  }
};
