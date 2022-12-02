const initialState = {
  posts: [],
};
const reducer = (state = initialState, action) => {
  console.log('posts reducer', action, state);
  return state;
};

export default reducer;
