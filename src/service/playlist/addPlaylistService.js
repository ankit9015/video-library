import axios from "axios";

function addPlaylistService(playlist, encodedToken) {
  try {
    const response = axios.post(
      "/api/user/playlists",
      {
        playlist: { title: playlist.title, description: playlist.description },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export default addPlaylistService;
