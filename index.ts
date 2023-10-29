import { configureStore } from "@reduxjs/toolkit";

// Actions e Actions TYPE
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

// Actions
export const changeUser = (user: string) => ({
  type: CHANGE_USER,
  info: 'Change the current user',
  payload: user
});

export const logout = () => ({
  type: LOGOUT,
  info: 'Logout the current user'
});

// State
export const initialState = {
  user: '',
  isLogged: false
}

// Reducers
export const userReducer = (prevState = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...prevState,
        user: action.payload,
        isLogged: true
      }
    case LOGOUT:
      return {
        ...prevState,
        user: '',
        isLogged: false
      }
    default:
      return prevState;
  }
}

// Store
export const store = configureStore({ reducer: userReducer });


console.log('initialState: ' + JSON.stringify(store.getState()));
store.dispatch(changeUser('Pamonha'))
console.log('newState: ' + JSON.stringify(store.getState()));
