import axios from "axios";

function addWatchLaterService() {
  try {
    const response = axios.post(
      `/api/user/history`,
      {
        video: video,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default addWatchLaterService;
