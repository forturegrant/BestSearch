const initialState = {
    list: [],
    loading: true
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "search":
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
