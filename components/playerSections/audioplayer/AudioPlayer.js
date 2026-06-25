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
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <div className={styles.ap_wrapper}>
        <div className={styles.ap_container}>
          <TrackInfo />
          <div className={styles.ap_trackControls}>
            <Controls />
            <ProgressBar />
          </div>
          <div className={styles.ap_volumeControls}>
            <VolumeControl />
            <button onClick={() => setOpenDrawer((prev) => !prev)}>
              <RiMenuAddLine />
            </button>
          </div>
        </div>
        <div
          className={`${styles.ap_drawer} ${openDrawer ? styles.ap_drawer_open : ""}`}
        >
          <div className={styles.ap_playlist}>
            <Playlist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
