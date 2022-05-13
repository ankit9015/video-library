import axios from "axios";

function getLikedService(encodedToken) {
  try {
    const response = axios.get("/api/user/likes", {
      headers: {
        authorization: encodedToken,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default getLikedService;
