import React from "react";
import styles from "@/styles/Player.module.css";
import AudioPlayer from "./audioplayer/AudioPlayer";
import { AudioPlayerProvider } from "../context/AudioPlayerContext";

const PlayerTitle = ({ book }) => {
  function renderHelper(item) {
    return (
      <>
        <div className={styles.summary}>
          <div className={styles.audio_book__summary}>
            <div className={styles.audio_book__summaryTitle}>
              <b>{item?.title}</b>
            </div>
            <div className={styles.audio_book__summaryText}>
                {item?.summary}
            </div>
          </div>
          <div className={styles.audio_wrapper}>
            <AudioPlayerProvider>
              <AudioPlayer/>
            </AudioPlayerProvider>
          </div>
        </div>
      </>
    );
  }
  return <>{book && renderHelper(book)}</>;
};

export default PlayerTitle;
