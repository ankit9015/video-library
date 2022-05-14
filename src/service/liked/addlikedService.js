import axios from "axios";

function addLikedService(video, encodedToken) {
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
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default addLikedService;
