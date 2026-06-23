import styles from "@/styles/BookInfo.module.css";

const BookAbout = ({ book }) => {
  function renderHelper(item) {
    return (
      <>
        <div className={styles.inner_book__secondaryTitle}>
          {" "}
          What&apos;s it about
        </div>
        <div className={styles.inner_book__tagsWrapper}>
            <div className={styles.inner_book__tag}>
                {item?.tags?.[0]}
            </div>
            <div className={styles.inner_book__tag}>
                {item?.tags?.[1]}
            </div>
        </div>
        <div className={styles.inner_book__description}>
            {item?.bookDescription}
        </div>
        <h2 className={styles.inner_book__secondaryTitle}>About the author</h2>
        <div className={styles.inner_book__authorDescription}>
            {item?.authorDescription}
        </div>
      </>
    );
  }

  return (
    <>
      
      {book && renderHelper(book)}
    </>
  );
};

export default BookAbout;
