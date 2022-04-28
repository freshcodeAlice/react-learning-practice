import { ACTIONS } from './constants';

export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case ACTIONS.MENU_OPEN: {
      return {
        ...state,
        isMenuOpen: true,
      };
    }
    case ACTIONS.MENU_CLOSE: {
      return {
        ...state,
        isMenuOpen: false,
      };
    }

    default:
      return state;
  }

  return state;
};
