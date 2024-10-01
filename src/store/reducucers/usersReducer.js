import {
  GET_USERS_ERROR,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  SET_USERS,
} from '../actions/usersActions';

const initialState = {
  userList: [],
  selectedUsers: [],
  loading: false,
  error: null,
};

export function usersReducers(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, userList: action.payload };
    case GET_USERS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        error: null,
        loading: false,
      };
    case GET_USERS_LOADING:
      return { ...state, error: null, loading: true };
    default:
      return state;
  }
}
