import axios from "axios";

async function addToPlaylistService(playlist, video, encodedToken) {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlist._id}`,
      {
        video: video,
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

export default addToPlaylistService;
