import axios from "axios";
import React from "react";

function deleteHistoryService(videoId, encodedToken) {
  try {
    const response = axios.delete(`/api/user/history/${videoId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default deleteHistoryService;
