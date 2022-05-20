import { createContext, useContext, useReducer } from "react";
import { filterReducer, initialState } from "./filterReducer";
import {
  categoryFilter,
  searchFilter,
  compositeFilter,
} from "./filterFunctions";
import { useVideo } from "../index";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);
  const { videos } = useVideo();

  const filteredVideos = compositeFilter(categoryFilter, searchFilter)(
    filterState,
    videos
  );

  return (
    <FilterContext.Provider
      value={{ filteredVideos, filterState, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
