const initialState = {
  email: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "EMAIL_CHANGED") {
    return {
      email: action.payload,
    };
  }
  return state;
};

export default reducer;
