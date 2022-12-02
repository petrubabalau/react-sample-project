import { ADD_USER, CHANGE_USERNAME } from '../actionTypes';

const initialState = {
  users: [],
  username: '',
};
const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);

  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, state.username],
      };
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  };
}

export default reducer;
