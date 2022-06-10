import {
  ADD_TO_HISTORY,
  DELETE_ALL_HISTORY,
  DELETE_FROM_HISTORY,
} from "../../constants/actionType";

const historyReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_HISTORY:
      return [payload, ...state.filter((item) => item._id !== payload._id)];
    case DELETE_FROM_HISTORY:
      return state.filter((item) => item._id !== payload._id);
    case DELETE_ALL_HISTORY:
      return [];
    default:
      return state;
  }
};

export default historyReducer;
