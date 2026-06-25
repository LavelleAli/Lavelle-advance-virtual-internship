import React from 'react';
import Image from 'next/image';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { useAudioPlayerContext } from '../../context/AudioPlayerContext';
import styles from '@/styles/Player.module.css';

const TrackInfo = () => {
  const { currentTrack } = useAudioPlayerContext();
  return (
    <div className={styles.ap_trackInfo}>
      <div className={styles.ap_trackThumbnail}>
        {currentTrack.thumbnail ? (
          <Image
            className={styles.ap_trackThumbnailImg}
            src={currentTrack.thumbnail}
            alt="audio avatar"
            width={96}
            height={96}
          />
        ) : (
          <div className={styles.ap_trackThumbnailFallback}>
            <span className={styles.ap_trackThumbnailIcon}>
              <BsMusicNoteBeamed />
            </span>
          </div>
        )}
      </div>
      <div>
        <p className={styles.ap_trackTitle}>{currentTrack.title}</p>
        <p className={styles.ap_trackAuthor}>{currentTrack.author}</p>
      </div>
    </div>
  )
}

export default TrackInfo
