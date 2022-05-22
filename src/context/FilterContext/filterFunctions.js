const categoryFilter = (videos, filterState) => {
  const filterCategories = filterState.categories?.map((category) =>
    category.toLowerCase()
  );
  if (filterCategories && filterCategories.length > 0) {
    const result = videos.filter((video) => {
      const categoryTags = video.categoryTags;
      const categoryPresent = categoryTags.some((category) =>
        filterCategories?.includes(category.toLowerCase())
      );
      return categoryPresent ? true : false;
    });
    return result;
  }
  return videos;
};

const searchFilter = (videos, filterState) => {
  const searchQuery = filterState.searchQuery?.toLowerCase();
  if (searchQuery && searchQuery.length > 0) {
    const result = videos.filter((video) =>
      video.title.toLowerCase().includes(searchQuery)
    );
    return result;
  }
  return videos;
};

const compositeFilter = (...filters) => {
  return (filterState, videos) => {
    const filteredList = filters.reduce(
      (results, currFilter) => currFilter(results, filterState),
      [...videos]
    );
    return filteredList;
  };
};

export { categoryFilter, searchFilter, compositeFilter };
