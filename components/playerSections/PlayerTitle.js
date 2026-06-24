import React from "react";
import styles from "@/styles/Player.module.css";

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
            <audio src=""></audio>
            <div className={styles.audio_track__wrapper}></div>
            <div className={styles.audio_controls__wrapper}></div>
            <div className={styles.audio_progress__wrapper}></div>
          </div>
        </div>
      </>
    );
  }
  return <>{book && renderHelper(book)}</>;
};

export default PlayerTitle;
