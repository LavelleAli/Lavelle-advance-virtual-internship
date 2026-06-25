"use client";
import { useAudioPlayerContext } from "@/components/context/AudioPlayerContext";
import { useCallback, useEffect, useState, useRef } from "react";
import {
  BsFillFastForwardFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillRewindFill,
  BsSkipEndFill,
  BsSkipStartFill,
  BsShuffle,
  BsRepeat,
} from "react-icons/bs";
import styles from "@/styles/Player.module.css";

const Controls = () => {

  const { currentTrack, audioRef, setDuration, duration, setTimeProgress, progressBarRef } = useAudioPlayerContext();
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playAnimationRef = useRef(null)

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    console.log('onLoadedMetadata fired - seconds:', seconds)
    if (seconds !== undefined) {
      setDuration(seconds)};
      if  (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
  }

useEffect(() => {
  if (audioRef.current && audioRef.current.readyState >= 1) {
    onLoadedMetadata();
  }
}, [audioRef]);



  const updateProgress = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(currentTime / duration) * 100}%`
      )
    }
  }, [duration, setTimeProgress, audioRef, progressBarRef]);


  const startAnimation = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate)
      };
      playAnimationRef.current = requestAnimationFrame(animate)
    }
  })


  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startAnimation()
    } else {
      audioRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress();
    }
    return () => {
      if (playAnimationRef.current !== null)  {
        cancelAnimationFrame(playAnimationRef.current)
      }
    }
  }, [isPlaying, startAnimation, updateProgress, audioRef]);

  return (
    <div className={styles.ap_controls}>
      <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} />

      <button onClick={() => {}}>
        <BsSkipStartFill size={20} />
      </button>
      <button onClick={() => {}}>
        <BsFillRewindFill size={20} />
      </button>

      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? (
          <BsFillPauseFill size={30} />
        ) : (
          <BsFillPlayFill size={30} />
        )}
      </button>

      <button onClick={() => {}}>
        <BsFillFastForwardFill size={20} />
      </button>
      <button onClick={() => {}}>
        <BsSkipEndFill size={20} />
      </button>
      <button onClick={() => setIsShuffle((prev) => !prev)}>
        <BsShuffle
          size={20}
          className={isShuffle ? styles.ap_controlActive : ""}
        />
      </button>
      <button onClick={() => setIsRepeat((prev) => !prev)}>
        <BsRepeat
          size={20}
          className={isRepeat ? styles.ap_controlActive : ""}
        />
      </button>
    </div>
  );
};

export default Controls;
