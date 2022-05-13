import axios from "axios";
import React from "react";

function deleteAllHistoryService(encodedToken) {
  try {
    const response = axios.delete("/api/user/history/all", {
      headers: {
        authorization: encodedToken,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default deleteAllHistoryService;
