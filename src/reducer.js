const initialState = []
const reducer = (state = initialState, action) => {
  console.log("reducer", state, action)
  return state
}

export default reducer;
