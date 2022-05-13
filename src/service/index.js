import { loginService } from "./authentication/loginService";
import signupService from "./authentication/signupService";
import createPlaylistService from "./playlist/createPlaylistService";
import addToPlaylistService from "./playlist/addToPlaylistService";
import removeFromPlaylistService from "./playlist/removeFromPlaylistService";
import removePlaylistService from "./playlist/removePlaylistService";
import getPlaylistsService from "./playlist/getPlaylistsService";
import getHistoryService from "./history/getHistoryService";
import addHistoryService from "./history/addHistoryService";
import deleteAllHistoryService from "./history/deleteAllHistoryService";
import deleteHistoryService from "./history/deleteAllHistoryService";
import addlikedService from "./liked/addlikedService";
import getLikedService from "./liked/getLikedService";
import deleteLikedService from "./liked/deleteLikedService";
import addWatchLaterService from "./watchLater/addWatchLaterService";
import getWatchLaterService from "./watchlater/getWatchLaterService";
import deleteWatchLaterService from "./watchLater/deleteWatchLaterService";

export {
  getPlaylistsService,
  loginService,
  signupService,
  createPlaylistService,
  removePlaylistService,
  addToPlaylistService,
  removeFromPlaylistService,
  getHistoryService,
  addHistoryService,
  deleteAllHistoryService,
  deleteHistoryService,
  addlikedService,
  getLikedService,
  deleteLikedService,
  addWatchLaterService,
  getWatchLaterService,
  deleteWatchLaterService,
};
