const historyReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_HISTORY":
      return [payload, ...state.filter((item) => item._id !== payload._id)];
    case "DELETE_FROM_HISTORY":
      return state.filter((item) => item._id !== payload._id);
    case "DELETE_ALL":
      return [];
    default:
      return state;
  }
};

export default historyReducer;
