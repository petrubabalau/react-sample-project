import { ADD_USER } from './actionTypes';

export const addUser = (username) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3004/users', {
      method: 'POST',
      body: JSON.stringify({
        username: username
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log('data:', data);
    dispatch({ type: ADD_USER, payload: username });
  };
};
