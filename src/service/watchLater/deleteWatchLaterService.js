import axios from "axios";

function deleteWatchLaterService(videoId, encodedToken) {
  try {
    const response = axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default deleteWatchLaterService;
