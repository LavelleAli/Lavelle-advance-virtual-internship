import styles from "@/styles/BookInfo.module.css";
import Skeleton from "@/components/skeletons/Skeleton";

const BookBasicInfoSkeleton = () => {
  return (
    <>
      <div className={styles.inner_book__title}>
        <Skeleton height="28px" width="70%" />
      </div>
      <div className={styles.inner_book__author}>
        <Skeleton height="20px" width="40%" />
      </div>
      <div className={styles.inner_book__subtitle}>
        <Skeleton height="20px" width="90%" />
      </div>

      <div className={styles.inner_book__wrapper}>
        <div className={styles.inner_book__descriptionWrapper}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={styles.inner_book__description}>
              <Skeleton height="18px" width="80%" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.inner_book__readBtnWrapper}>
        <Skeleton width="144px" height="48px" borderRadius="4px" />
        <Skeleton width="144px" height="48px" borderRadius="4px" />
      </div>
    </>
  );
};

export default BookBasicInfoSkeleton;
