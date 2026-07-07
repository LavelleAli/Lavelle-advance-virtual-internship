import styles from "@/styles/BookInfo.module.css";
import React from "react";
import {
  FaRegStar,
  FaRegClock,
  FaMicrophone,
  FaRegLightbulb,
  FaBookOpen,
} from "react-icons/fa6";
import ReadButton from "./ReadButton";
import ListenButton from "./ListenButton";
import AddBookToCollection from "./AddBookToCollection";

const BookBasicInfo = ({ book }) => {
  
  function renderHelper(item) {
    return (
      <>
        <div className={styles.inner_book__title}>{item?.title}</div>
        <div className={styles.inner_book__author}>{item?.author}</div>
        <div className={styles.inner_book__subtitle}>{item?.subTitle}</div>
        <div className={styles.inner_book__wrapper}>
          <div className={styles.inner_book__descriptionWrapper}>
            <div className={styles.inner_book__description}>
              <div className={styles.inner_book__icon}>
                <FaRegStar />
              </div>
              <div className={styles.inner_book_overallRatings}>
                {item?.averageRating}                
              </div>
              <div className={styles.inner_book__totalRatings}>
                ({item?.totalRating} Ratings)
              </div>
            </div>

            <div className={styles.inner_book__description}>
              <div className={styles.inner_book__icon}>
                <FaRegClock />
              </div>
              <div className={styles.inner_book__duration}>03:24</div>
            </div>

            <div className={styles.inner_book__description}>
              <div className={styles.inner_book__icon}>
                <FaMicrophone />
              </div>
              <div className={styles.inner_book__type}>{item?.type}</div>
            </div>

            <div className={styles.inner_book__description}>
              <div className={styles.inner_book__icon}>
                <FaRegLightbulb />
              </div>
              <div className={styles.inner_book__keyIdeas}>
                {item?.keyIdeas} Key Ideas
              </div>
            </div>
          </div>
        </div>

        <div className={styles.inner_book__readBtnWrapper}>
          <ReadButton id={item?.id} className={styles.inner_book__readBtn}>
            <div className={styles.inner_book__readIcon}>
              <FaBookOpen />
            </div>
            <div className={styles.inner_book__readText}>Read</div>
          </ReadButton>
          <ListenButton id={item?.id} className={styles.inner_book__readBtn}>
            <div className={styles.inner_book__readIcon}>
              <FaMicrophone />
            </div>
            <div className={styles.inner_book__readText}>Listen</div>
          </ListenButton>
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

export default BookBasicInfo;
