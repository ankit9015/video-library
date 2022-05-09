const playlistReducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "ADD_PLAYLIST":
      break;
    case "REMOVE_PLAYLIST":
      break;
    case "ADD_TO_PLAYLIST":
      break;
    case "REMOVE_FROM_PLAYLIST":
      break;
    default:
      break;
  }
};

export { playlistReducer };
