import axios from "axios";

async function removeFromPlaylistService(playlistId, videoId, encodedToken) {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default removeFromPlaylistService;
