import React, { useState, useEffect, useRef } from 'react';
import { audioTracks } from '../../../fakeData/audioTracks';
import { RootState } from '../../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAudioPlay,
  setAudioPause,
  setPlayerClose,
} from '../../../store/actionCreators/systemAction';
import {
  FaPause,
  FaPlay,
  FaStepForward,
  FaStepBackward,
  FaTimes,
} from 'react-icons/fa';

const AudioPlayer: React.FC = () => {
  const systemState = useSelector((state: RootState) => state.systemReducer);
  const dispatch = useDispatch();

  const dispatchAudioPlay = () => {
    dispatch(setAudioPlay());
  };
  const dispatchAudioPause = () => {
    dispatch(setAudioPause());
  };
  const dispatchPlayerClose = () => {
    dispatch(setPlayerClose());
  }; // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  // const [isPlay, setIsPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [trackStyling, setTrackStyling] = useState('');

  // Destructure for conciseness
  const { audioTitle, artist, audioType, audioImage, audioSrc } = [
    systemState.audioTrackObj,
  ]
    ? [systemState.audioTrackObj][trackIndex]
    : {
        audioTitle: '',
        artist: '',
        audioType: '',
        audioImage: '',
        audioSrc: '',
      };
  const { isAudioPlay } = systemState;
  // Refs
  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('') : undefined
  );
  const intervalRef = useRef(0);
  // const isReady = useRef(false);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      const { duration } = audioRef.current;
      setDuration(duration);
      const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : '0%';
      const trackStyling = `
         -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #555))
       `;
      setTrackStyling(trackStyling);
    }
  }, [duration, trackStyling, trackProgress]);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      if (audioRef.current.ended) {
        // toNextTrack();
        setTrackProgress(0);
        setPause();
        clearInterval(intervalRef.current);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isAudioPlay) {
      dispatchAudioPlay();
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(audioTracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < audioTracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };
  useEffect(() => {
    if (audioSrc) {
      audioRef.current.src = `/audio/${audioSrc}.mp3`;
    } else {
      audioRef.current.pause();
    }
  }, [audioSrc]);
  useEffect(() => {
    if (isAudioPlay) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlay]);

  const setStartPlay = () => {
    dispatchAudioPlay();
  };
  const setPause = () => {
    dispatchAudioPause();
  };

  // Handles cleanup and setup when changing tracks
  // useEffect(() => {
  //   audioRef.current.pause();

  //   audioRef.current = new Audio(`/audio/${audioSrc && audioSrc}.mp3`);
  //   setTrackProgress(audioRef.current.currentTime);

  //   if (isReady.current) {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //     startTimer();
  //   } else {
  //     // Set the isReady ref as true for the next pass
  //     isReady.current = true;
  //   }
  // }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="cs-navbar-style-light dark:cs-navbar-style-dark p-4">
      <div className="flex items-center">
        {/* <div
          className="hidden lg:flex mx-1 items-center cursor-pointer"
          onClick={toPrevTrack}
        >
          <FaStepBackward
            className="icon-common mr-2 "
          ></FaStepBackward>
        </div> */}
        {isAudioPlay ? (
          <div
            className="mx-1 flex cursor-pointer items-center"
            onClick={setPause}
          >
            <FaPause className="icon-common mr-2 "></FaPause>
          </div>
        ) : (
          <div
            className="mx-1 flex cursor-pointer items-center"
            onClick={setStartPlay}
          >
            <FaPlay className="icon-common mr-2 "></FaPlay>
          </div>
        )}

        {/* <div
          className="hidden lg:flex mx-1 items-center cursor-pointer"
          onClick={toNextTrack}
        >
          <FaStepForward
            className="icon-common mr-2 "
          ></FaStepForward>
        </div> */}
        <div className="min-w-max">{audioTitle && audioTitle}</div>
        <div className="mx-4 mt-1 flex w-full items-center lg:mx-8">
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="w-full"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />
        </div>
        <div
          className="flex cursor-pointer items-center rounded-full border border-solid border-gray-100 p-1"
          onClick={dispatchPlayerClose}
        >
          <FaTimes className="icon-common"></FaTimes>
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
