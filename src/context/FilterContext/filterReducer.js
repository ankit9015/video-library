import {
  CATEGORY_FILTER,
  SEARCH_FILTER,
  CLEAR_FILTER,
} from "../../constants/actionType";

const initialState = {};

const filterReducer = (state, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case CATEGORY_FILTER:
      return {
        ...state,
        categories: state.categories
          ? [...state.categories, payload]
          : [payload],
      };
    case SEARCH_FILTER:
      return { ...state, searchQuery: payload };
    case CLEAR_FILTER:
      return initialState;
    default:
      return state;
  }
};

export { filterReducer, initialState };
