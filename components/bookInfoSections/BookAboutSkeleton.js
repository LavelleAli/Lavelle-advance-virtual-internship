import styles from "@/styles/BookInfo.module.css";
import Skeleton from "@/components/skeletons/Skeleton";

const BookAboutSkeleton = () => {
  return (
    <>
      <div className={styles.inner_book__secondaryTitle}>
        <Skeleton height="18px" width="200px" />
      </div>
      <div className={styles.inner_book__tagsWrapper}>
        <Skeleton width="100px" height="48px" borderRadius="4px" />
        <Skeleton width="100px" height="48px" borderRadius="4px" />
      </div>

      <div className={styles.inner_book__description}>
        <Skeleton height="16px" width="100%" />
        <div style={{ marginTop: "8px" }}>
          <Skeleton height="16px" width="95%" />
        </div>
        <div style={{ marginTop: "8px" }}>
          <Skeleton height="16px" width="80%" />
        </div>
      </div>

      <div className={styles.inner_book__secondaryTitle}>
        <Skeleton height="18px" width="180px" />
      </div>
      <div className={styles.inner_book__authorDescription}>
        <Skeleton height="16px" width="100%" />
        <div style={{ marginTop: "8px" }}>
          <Skeleton height="16px" width="90%" />
        </div>
      </div>
    </>
  );
};

export default BookAboutSkeleton;
