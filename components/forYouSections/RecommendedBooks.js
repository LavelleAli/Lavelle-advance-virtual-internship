import styles from "@/styles/ForYou.module.css";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";

const RecommendedBooks = ({ recBooks }) => {
  function renderPremium(book) {
    return (
      <a
        key={book.id}
        href={`/book/${book?.id}`}
        className={styles.for_you__recommendedBooks_link}
      >
        <div
          className={`${styles.book_pill} ${
            book?.subscriptionRequired === true
              ? styles.book_pill__subscriptionRequired
              : ""
          }`}
        >
          {book?.subscriptionRequired === true ? "Premium" : null}
        </div>
        <audio src={book?.audioLink}></audio>
        <figure className={styles.book_image__wrapper}>
          <Image
            src={book?.imageLink}
            className={styles.book_image}
            width={300}
            height={300}
            alt={book.title}
          />
        </figure>
        <div className={styles.recommended_book__title}>{book?.title}</div>
        <div className={styles.recommended_book__author}>{book?.author}</div>
        <div className={styles.recommended_book__subTitle}>
          {book?.subTitle}
        </div>
        <div className={styles.recommended_book__detailsWrapper}>
          <div className={styles.recommended_book__details}>
            <div className={styles.recommended_book__detailsIcon}>
              <CiClock2 />
            </div>
            <div className={styles.recommended_book__detailsText}>03:24</div>
          </div>
          <div className={styles.recommended_book__details}>
            <div className={styles.recommended_book__detailsIcon}>
              <IoIosStarOutline />
            </div>
            <div className={styles.recommended_book__detailsText}>
              {Math.max(book?.averageRating)}
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <>
      <div>
        <div className={styles.for_you__title}> Recommended For You</div>
        <div className={styles.for_you__subTitle}>
          {" "}
          We think you&apos;ll like these
        </div>
        <div className={styles.for_you__recommendedBooks}>
          {/* {recBooks.map((book) => renderNonPremium(book)).slice(0, 2)} */}

          {recBooks.map((book) => renderPremium(book))}
        </div>
      </div>
    </>
  );
};

export default RecommendedBooks;
