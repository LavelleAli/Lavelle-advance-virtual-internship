import { useEffect, useState } from "react";
import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from "react-icons/io";
import styles from "@/styles/Player.module.css";
import { useAudioPlayerContext } from "@/components/context/AudioPlayerContext";

const VolumeControl = () => {
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const { audioRef} = useAudioPlayerContext();
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume
    }
  },[volume, audioRef, muteVolume])


  return (
    <div>
      <div className={styles.ap_volume_row}>
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume< 5 ? (
            <IoMdVolumeOff size={25} />
          ) : volume< 40 ? (
            <IoMdVolumeLow size={25} />
          ) : (
            <IoMdVolumeHigh size={25} />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          className={styles.ap_volume_input}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  )
};

export default VolumeControl;
