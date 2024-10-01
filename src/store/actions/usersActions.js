import axios from 'axios';

export const SET_USERS = 'sets users from api call';
export const GET_USERS_SUCCESS = 'gets users successfully';
export const GET_USERS_ERROR = 'gets error while getting users';
export const GET_USERS_LOADING = 'get users process is loading';

export function setUsers(list) {
  return {
    type: SET_USERS,
    payload: list,
  };
}

export function setLoading() {
  return {
    type: GET_USERS_LOADING,
  };
}

export function getUsersSuccess(list) {
  return {
    type: GET_USERS_SUCCESS,
    payload: list,
  };
}

export function getUsersError(message) {
  return {
    type: GET_USERS_ERROR,
    payload: message,
  };
}

export function getUsers() {
  return function (dispatch, getState) {
    dispatch(setLoading());
    axios
      .get('https://reqres.in/api/users')
      .then((response) => {
        dispatch(getUsersSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getUsersError(error.message));
      });
  };
}

export const getUsers_v2 = () => (dispatch, getState) => {
  dispatch(setLoading());
  axios
    .get('https://reqres.in/api/users')
    .then((response) => {
      dispatch(getUsersSuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(getUsersError(error.message));
    });
};
