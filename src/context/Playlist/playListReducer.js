const playlistReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PLAYLIST":
      return [...payload];
    case "REMOVE_PLAYLIST":
      return [...payload];
    case "ADD_TO_PLAYLIST":
      return [
        ...state.map((playlist) =>
          playlist._id === payload._id ? payload : playlist
        ),
      ];
    case "REMOVE_FROM_PLAYLIST":
      return [
        ...state.map((playlist) =>
          playlist._id === payload._id ? payload : playlist
        ),
      ];
    default:
      return state;
  }
};

export { playlistReducer };
