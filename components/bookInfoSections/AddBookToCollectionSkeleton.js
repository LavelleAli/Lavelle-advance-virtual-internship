import styles from "@/styles/BookInfo.module.css";
import Skeleton from "@/components/skeletons/Skeleton";

const AddBookToCollectionSkeleton = () => {
  return (
    <div className={styles.inner_book__bookmark}>
      <Skeleton width="20px" height="20px" circle />
      <Skeleton width="160px" height="18px" />
    </div>
  );
};

export default AddBookToCollectionSkeleton;
