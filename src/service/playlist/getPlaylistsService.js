import axios from "axios";

async function getPlaylistsService(encodedToken) {
  try {
    const response = await axios.get("/api/user/playlists", {
      headers: {
        authorization: encodedToken,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default getPlaylistsService;
