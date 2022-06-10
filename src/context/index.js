import { PlaylistProvider, usePlaylist } from "./Playlist/PlaylistContext";
import { AuthProvider, useAuth } from "./AuthContext/AuthContext";
import { VideoProvider, useVideo } from "./VideoContext/VideoContext";
import { HistoryProvider, useHistory } from "./HistoryContext/HistoryContext";
import { LikesProvider, useLikes } from "./LikeContext/LikeContext";
import {
  WatchLaterProvider,
  useWatchLater,
} from "./WatchLater/WatchLaterContext";
import { FilterProvider, useFilter } from "./FilterContext/FilterContext";

export {
  PlaylistProvider,
  AuthProvider,
  VideoProvider,
  useAuth,
  usePlaylist,
  useVideo,
  HistoryProvider,
  useHistory,
  LikesProvider,
  useLikes,
  WatchLaterProvider,
  useWatchLater,
  FilterProvider,
  useFilter,
};
