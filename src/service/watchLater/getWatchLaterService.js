import axios from "axios";

function getWatchLaterService(encodedToken) {
  try {
    const response = axios.get("/api/user/watchlater", {
      headers: {
        authorization: encodedToken,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default getWatchLaterService;
