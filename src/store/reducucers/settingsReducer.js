import { CHANGE_TITLE } from '../actions/settingsActions';

const initialState = {
  darkModeEnabled: false,
  lang: 'TR',
  acticeUser: null,
  title: 'Merhaba Dünya',
};

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
}
