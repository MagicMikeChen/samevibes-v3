import { Action, ActionTypes } from "../actionTypes";
import { ISystemReducer } from "../reducerTypes";

const initialState = {
  isLogin: false,
  userToken: "",
  isShowPlayer: false,
  isAudioPlay: false,
  accessToken: "",
  userSpotifyId: "",
  modal: { isPopupLoading: false, isPopupModalShow: false, type: "" },
  audioTrackObj: {
    audioSrc: "",
    audioTitle: "",
    audioImage: "",
    album: "",
    artist: "",
    audioType: "",
  },
  error: null,
};

export const systemReducer = (
  state: ISystemReducer = initialState,
  action: ActionTypes
): ISystemReducer => {
  switch (action.type) {
    case Action.SET_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case Action.SET_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    case Action.SET_POPUP_LOADING:
      return {
        ...state,
        modal: { ...state.modal, isPopupLoading: true },
      };
    case Action.CLOSE_POPUP_LOADING:
      return {
        ...state,
        modal: { ...state.modal, isPopupLoading: false },
      };
    case Action.SET_POPUP_MODAL:
      return {
        ...state,
        modal: { ...state.modal, isPopupModalShow: true, type: action.payload },
      };
    case Action.CLOSE_POPUP_MODAL:
      return {
        ...state,
        modal: { ...state.modal, isPopupModalShow: false },
      };
    case Action.SET_AUDIO_TRACK:
      return {
        ...state,
        audioTrackObj: action.payload,
        error: null,
      };
    case Action.SET_AUDIO_PLAY:
      return {
        ...state,
        isAudioPlay: action.payload,
        error: null,
      };
    case Action.SET_AUDIO_PAUSE:
      return {
        ...state,
        isAudioPlay: action.payload,
        error: null,
      };
    case Action.OPEN_PLAYER:
      return {
        ...state,
        isShowPlayer: action.payload,
        error: null,
      };
    case Action.CLOSE_PLAYER:
      return {
        ...state,
        isShowPlayer: action.payload,
        error: null,
      };
    case Action.SET_ACESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
        error: null,
      };
    case Action.SET_USER_SPOTIFY_ID:
      return {
        ...state,
        userSpotifyId: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
