import { loginService } from "./authentication/loginService";
import signupService from "./authentication/signupService";
import createPlaylistService from "./playlist/createPlaylistService";
import addToPlaylistService from "./playlist/addToPlaylistService";
import removeFromPlaylistService from "./playlist/removeFromPlaylistService";
import removePlaylistService from "./playlist/removePlaylistService";
import getPlaylistsService from "./playlist/getPlaylistsService";
import addLikedService from "./liked/addLikedService";
import getLikedService from "./liked/getLikedService";
import deleteLikedService from "./liked/deleteLikedService";
import addWatchLaterService from "./watchLater/addWatchLaterService";
import deleteWatchLaterService from "./watchLater/deleteWatchLaterService";
import getWatchLaterService from "./watchLater/getWatchLaterService";

export {
  getPlaylistsService,
  loginService,
  signupService,
  createPlaylistService,
  removePlaylistService,
  addToPlaylistService,
  removeFromPlaylistService,
  addLikedService,
  getLikedService,
  deleteLikedService,
  addWatchLaterService,
  deleteWatchLaterService,
  getWatchLaterService,
};
