import styles from "@/styles/ForYou.module.css";
import Skeleton from "@/components/skeletons/Skeleton";

const CARD_COUNT = 5;

const SuggestedBooksSkeleton = () => {
  return (
    <div>
      <div className={styles.for_you__title}>Suggested Books</div>
      <div className={styles.for_you__subTitle}>Browse those books</div>
      <div className={styles.for_you__recommendedBooks}>
        {Array.from({ length: CARD_COUNT }).map((_, i) => (
          <div key={i} className={styles.for_you__recommendedBooks_link}>
            <Skeleton width="172px" height="200px" />
            <div style={{ marginTop: "8px" }}>
              <Skeleton height="16px" width="90%" />
            </div>
            <div style={{ marginTop: "8px" }}>
              <Skeleton height="14px" width="60%" />
            </div>
            <div style={{ marginTop: "8px" }}>
              <Skeleton height="14px" width="80%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedBooksSkeleton;
