import axios from "axios";

function addlikedService(video, encodedToken) {
  try {
    const response = axios.post(
      `/api/user/likes`,
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

export default addlikedService;
