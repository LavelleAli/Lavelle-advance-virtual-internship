import styles from '@/styles/Player.module.css';
import { useAudioPlayerContext } from '@/components/context/AudioPlayerContext';

const ProgressBar = () => {
  const { progressBarRef, audioRef, timeProgress, setTimeProgress, duration } = useAudioPlayerContext();

  const handelProgressChange =  () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);
      progressBarRef.current.style.setProperty('--range-progress',`${(newTime / duration) * 100}%`)
    }
  }

  const formatTime = (time) => {
    if (typeof time === 'number' && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      const formatMinutes = minutes.toString().padStart(2, "0");
      const formatSeconds = seconds.toString().padStart(2, "0")
      return `${formatMinutes}:${formatSeconds}`;
    }
  }

  return (
    <div className={styles.ap_progress}>
      <div className={styles.ap_progress_row}>
        <span>{formatTime(timeProgress)}</span>
        <input 
          className={styles.ap_progress_input} 
          type="range"  
          ref= { progressBarRef }
          defaultValue={ 0 }
          onChange={handelProgressChange}
         />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  )
}

export default ProgressBar
