"use client";
import React, { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import Playlist from "./Playlist";
import styles from "@/styles/Player.module.css";

const AudioPlayer = () => {

  return (
    <div>
      <div className={styles.ap_wrapper}>
        <div className={styles.ap_container}>
          <TrackInfo />
          <div className={styles.ap_trackControls}>
            <Controls />
          </div>
          <div className={styles.ap_progressControls}>
            <ProgressBar />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default AudioPlayer;
