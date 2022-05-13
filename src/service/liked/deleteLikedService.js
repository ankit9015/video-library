import axios from "axios";

function deleteLikedService(videoId, encodedToken) {
  try {
    const response = axios.delete(`/api/user/likes/${videoId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default deleteLikedService;
