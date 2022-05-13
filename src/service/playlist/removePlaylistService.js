import axios from "axios";

function removePlaylistService(playlistId, encodedToken) {
  try {
    const response = axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}

export default removePlaylistService;
