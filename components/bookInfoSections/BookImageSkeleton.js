import styles from "@/styles/BookInfo.module.css";
import Skeleton from "@/components/skeletons/Skeleton";

const BookImageSkeleton = () => {
  return (
    <div className={styles.inner_book__imgWrapper}>
      <Skeleton width="300px" height="300px" />
    </div>
  );
};

export default BookImageSkeleton;
