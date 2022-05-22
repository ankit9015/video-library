import axios from "axios";

function addWatchLaterService(video, encodedToken) {
  try {
    const response = axios.post(
      `/api/user/watchlater`,
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
  } catch (error) {
    console.log(error);
  }
}

export default addWatchLaterService;
