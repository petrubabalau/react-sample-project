import { ADD_USER } from './actionTypes';

const initialState = []
const reducer = (state = initialState, action) => {
  console.log("reducer", state, action)
  if (action.type === ADD_USER) {
    return [...state, action.payload]
  }
  return state;
}

export default reducer;
