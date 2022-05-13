import axios from "axios";

function getHistoryService(encodedToken) {
  try {
    const response = axios.get("/api/user/history", {
      headers: {
        authorization: encodedToken,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default getHistoryService;
