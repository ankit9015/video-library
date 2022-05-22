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
  } catch (err) {
    console.log(err);
  }
}

export default addLikedService;
