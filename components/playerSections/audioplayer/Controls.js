"use client";
import { useAudioPlayerContext } from "@/components/context/AudioPlayerContext";
import { useCallback, useEffect, useState, useRef } from "react";
import {
  BsFillFastForwardFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillRewindFill,
} from "react-icons/bs";
import { RiReplay10Fill, RiForward10Fill, RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import styles from "@/styles/Player.module.css";
import { tracks } from "../data/Tracks";

const Controls = () => {
  const {
    currentTrack,
    audioRef,
    setDuration,
    duration,
    setTimeProgress,
    progressBarRef,
    isPlaying,
    setIsPlaying,
  } = useAudioPlayerContext();

  const playAnimationRef = useRef(null);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;

    if (seconds !== undefined) {
      setDuration(seconds);
    }
    if (progressBarRef.current) {
      progressBarRef.current.max = seconds.toString();
    }
  };

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
        "--range-progress",
        `${(currentTime / duration) * 100}%`,
      );
    }
  }, [duration, setTimeProgress, audioRef, progressBarRef]);

  const startAnimation = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  });

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startAnimation();
    } else {
      audioRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress();
    }
    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, startAnimation, updateProgress, audioRef]);

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
      updateProgress();
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
      updateProgress();
    }
  };

  return (
    <div className={styles.ap_controls}>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />

      <button onClick={skipBackward}>
        <RiReplay10Fill size={30} />
      </button>

      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? (
          <RiPauseCircleFill size={50} />
          // <BsFillPauseFill size={30} />
        ) : (
          <RiPlayCircleFill size={50} />
        )}
      </button>

      <button onClick={skipForward}>
        <RiForward10Fill size={30} />
      </button>
    </div>
  );
};

export default Controls;
