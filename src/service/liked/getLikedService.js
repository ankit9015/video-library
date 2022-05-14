import axios from "axios";

function getLikedService(encodedToken) {
  try {
    const response = axios.get("/api/user/likes", {
      headers: {
        authorization: encodedToken,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default getLikedService;
