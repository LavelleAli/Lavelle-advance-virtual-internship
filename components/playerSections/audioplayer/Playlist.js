import React from "react";
import Image from "next/image";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { useAudioPlayerContext } from "../../context/AudioPlayerContext";
import { tracks } from "../data/Tracks";
import styles from "@/styles/Player.module.css";

const Playlist = () => {
  const { currentTrack, setIsPlaying, setCurrentTrack } = useAudioPlayerContext();
  const handleClick = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };
  return (
    <ul className={styles.ap_playlist_list}>
      {tracks.map((track, index) => (
        <li
          key={index}
          className={`${styles.ap_playlist_item} ${
            currentTrack.title === track.title ? styles.ap_playlist_item_active : ""
          }`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key ==="Enter" || e.key === ' ') {
              handleClick(track);
            }
          }}
          onClick={() => handleClick(track)}
        >
          <div className={styles.ap_playlist_thumbnail}>
            {track.thumbnail ? (
              <Image
                className={styles.ap_playlist_thumbnail_img}
                src={track.thumbnail}
                alt="audio avatar"
                width={64}
                height={64}
              />
            ) : (
              <div className={styles.ap_playlist_thumbnail_fallback}>
                <span className={styles.ap_playlist_thumbnail_icon}>
                  <BsMusicNoteBeamed />
                </span>
              </div>
            )}
          </div>
          <div>
            <p className={styles.ap_playlist_title}>{track.title}</p>
            <p className={styles.ap_playlist_author}>{track.author}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Playlist;
