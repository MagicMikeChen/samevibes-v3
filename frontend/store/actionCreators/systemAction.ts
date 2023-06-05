import { Action, ActionTypes } from '../actionTypes';
import { Dispatch } from 'redux';
import { IAudioTrack } from '../reducerTypes';


export const setLogin = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_LOGIN,
  });
};
export const setLogout = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_LOGOUT,
  });
};
export const setPopupLoading = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_POPUP_LOADING,
  });
};

export const closePopupLoading = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.CLOSE_POPUP_LOADING,
  });
};
export const setPopupModal = (modalType: string) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_POPUP_MODAL,
    payload: modalType,
  });
};
export const closePopupModal = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.CLOSE_POPUP_MODAL,
  });
};
export const setAudioTrack = (audioTrackObj: IAudioTrack) => async (dispatch: Dispatch<ActionTypes>) => {
  await dispatch({
    type: Action.SET_AUDIO_PAUSE,
    payload: false,
  });
  await dispatch({
    type: Action.SET_AUDIO_TRACK,
    payload: audioTrackObj,
  });
  await dispatch({
    type: Action.SET_AUDIO_PLAY,
    payload: true,
  });
};
export const setAudioPlay = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_AUDIO_PLAY,
    payload: true,
  });
};
export const setAudioPause = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_AUDIO_PAUSE,
    payload: false,
  });
};
export const setPlayerOpen = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.OPEN_PLAYER,
    payload: true,
  });
};
export const setPlayerClose = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.CLOSE_PLAYER,
    payload: false,
  });
  dispatch({
    type: Action.SET_AUDIO_PAUSE,
    payload: false,
  });
};
export const setAcessToken = (token) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_ACESS_TOKEN,
    payload: token,
  });
};

export const setUserSpotifyId = (id) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_USER_SPOTIFY_ID,
    payload: id,
  });
};