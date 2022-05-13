import axios from "axios";

function addHistoryService(video, encodedToken) {
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

export default addHistoryService;
