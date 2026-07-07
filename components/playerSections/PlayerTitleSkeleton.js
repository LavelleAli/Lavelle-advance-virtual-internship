import styles from "@/styles/Player.module.css";
import Skeleton from "@/components/skeletons/Skeleton";

const PlayerTitleSkeleton = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.audio_book__summary}>
        <div className={styles.audio_book__summaryTitle} style={{ display: "flex", justifyContent: "center" }}>
          <Skeleton height="24px" width="280px" />
        </div>
        <div className={styles.audio_book__summaryText}>
          <Skeleton height="16px" width="100%" />
          <div style={{ marginTop: "8px" }}>
            <Skeleton height="16px" width="95%" />
          </div>
          <div style={{ marginTop: "8px" }}>
            <Skeleton height="16px" width="90%" />
          </div>
          <div style={{ marginTop: "8px" }}>
            <Skeleton height="16px" width="97%" />
          </div>
          <div style={{ marginTop: "8px" }}>
            <Skeleton height="16px" width="80%" />
          </div>
        </div>
      </div>

      <div className={styles.ap_container}>
        <div className={styles.ap_trackInfo}>
          <Skeleton width="3rem" height="3rem" borderRadius="0.375rem" />
          <div>
            <Skeleton height="14px" width="120px" />
            <div style={{ marginTop: "6px" }}>
              <Skeleton height="12px" width="80px" />
            </div>
          </div>
        </div>

        <div className={styles.ap_trackControls}>
          <div className={styles.ap_controls}>
            <Skeleton width="30px" height="30px" circle />
            <Skeleton width="50px" height="50px" circle />
            <Skeleton width="30px" height="30px" circle />
          </div>
          <div className={styles.ap_progress}>
            <div className={styles.ap_progress_row}>
              <Skeleton width="30px" height="12px" />
              <Skeleton height="4px" width="100%" borderRadius="2px" />
              <Skeleton width="30px" height="12px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerTitleSkeleton;
