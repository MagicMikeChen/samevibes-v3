import { IPost, IAudioTrack, ICurUser } from "../reducerTypes";

export enum Action {
  SET_LOGIN = "SET_LOGIN",
  SET_LOGOUT = "SET_LOGOUT",
  SET_POPUP_LOADING = "SET_POPUP_LOADING",
  CLOSE_POPUP_LOADING = "CLOSE_POPUP_LOADING",
  GET_POST = "GET_POST",
  GET_POSTS = "GET_POSTS",
  GET_PROFILE_POSTS = "GET_PROFILE_POSTS",
  SET_AUDIO_TRACK = "SET_AUDIO_TRACK",
  OPEN_PLAYER = "OPEN_PLAYER",
  CLOSE_PLAYER = "CLOSE_PLAYER",
  SET_AUDIO_PLAY = "SET_AUDIO_PLAY",
  SET_AUDIO_PAUSE = "SET_AUDIO_PAUSE",
  GET_CUR_USER = "GET_CUR_USER",
  TOGGLE_LIKE = "TOGGLE_LIKE",
  TOGGLE_PROFILE_LIKE = "TOGGLE_PROFILE_LIKE",
  SET_POPUP_MODAL = "SET_POPUP_MODAL",
  CLOSE_POPUP_MODAL = "CLOSE_POPUP_MODAL",
  SET_ACESS_TOKEN = "SET_ACESS_TOKEN",
  SET_USER_SPOTIFY_ID = "SET_USER_SPOTIFY_ID",
}

interface setLogin {
  type: Action.SET_LOGIN;
}

interface setLogout {
  type: Action.SET_LOGOUT;
}

interface setPopupLoading {
  type: Action.SET_POPUP_LOADING;
}
interface closePopupLoading {
  type: Action.CLOSE_POPUP_LOADING;
}
interface setPopupModal {
  type: Action.SET_POPUP_MODAL;
  payload: string;
}
interface closePopupModal {
  type: Action.CLOSE_POPUP_MODAL;
}

interface getPost {
  type: Action.GET_POST;
  payload: IPost;
}

interface getPosts {
  type: Action.GET_POSTS;
  payload: IPost[];
}

interface getProfilePosts {
  type: Action.GET_PROFILE_POSTS;
  payload: string;
}
interface setAudioTrack {
  type: Action.SET_AUDIO_TRACK;
  payload: IAudioTrack;
}

interface setAudioPlay {
  type: Action.SET_AUDIO_PLAY;
  payload: boolean;
}
interface setAudioPause {
  type: Action.SET_AUDIO_PAUSE;
  payload: boolean;
}
interface setPlayerOpen {
  type: Action.OPEN_PLAYER;
  payload: boolean;
}
interface setPlayerClose {
  type: Action.CLOSE_PLAYER;
  payload: boolean;
}
interface getCurUser {
  type: Action.GET_CUR_USER;
  payload: string | string[];
}
interface toggleLike {
  type: Action.TOGGLE_LIKE;
  payload: string;
}

interface toggleProfileLike {
  type: Action.TOGGLE_PROFILE_LIKE;
  payload: string;
}

interface setAcessToken {
  type: Action.SET_ACESS_TOKEN;
  payload: string;
}
interface setUserSpotifyId {
  type: Action.SET_USER_SPOTIFY_ID;
  payload: string;
}
export type ActionTypes =
  | getPost
  | setUserSpotifyId
  | setAcessToken
  | getPosts
  | setAudioTrack
  | setAudioPlay
  | setAudioPause
  | setPlayerOpen
  | setPlayerClose
  | getProfilePosts
  | getCurUser
  | toggleLike
  | toggleProfileLike
  | setLogin
  | setLogout
  | setPopupLoading
  | closePopupLoading
  | setPopupModal
  | closePopupModal;
