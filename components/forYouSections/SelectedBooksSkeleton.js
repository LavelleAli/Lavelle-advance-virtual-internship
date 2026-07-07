import styles from "@/styles/ForYou.module.css";
import Skeleton from "@/components/skeletons/Skeleton";

const SelectedBooksSkeleton = () => {
  return (
    <>
      <div className={styles.for_you__title}>Selected just for you</div>
      <div className={styles.selected__book}>
        <div className={styles.selected__book__subTitle}>
          <Skeleton height="14px" width="90%" />
          <div style={{ marginTop: "8px" }}>
            <Skeleton height="14px" width="70%" />
          </div>
        </div>
        <div className={styles.selected__book__line}></div>
        <div className={styles.selected__book__content}>
          <Skeleton width="140px" height="140px" />
          <div className={styles.selected_book__text}>
            <Skeleton height="18px" width="60%" />
            <div style={{ marginTop: "8px" }}>
              <Skeleton height="14px" width="40%" />
            </div>
            <div style={{ marginTop: "8px" }}>
              <Skeleton height="14px" width="50%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedBooksSkeleton;
