import axios from "axios";

import React from "react";

function getWatchLaterService(encodedToken) {
  try {
    const response = axios.get("/api/user/watchlater", {
      headers: {
        authorization: encodedToken,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default getWatchLaterService;
