"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "@/styles/ForYou.module.css";
import Image from "next/image";
import axios from "axios";
import { CiClock2 } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";

const SuggestedBooks = () => {
  const [suggestedBooks, setSuggestedBooks] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
      );
      setSuggestedBooks(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time fetch on mount
    fetchData();
  }, [fetchData]);

  function renderHelper(item) {
    return (
      <a
        href={`/book/${item?.id}`}
        className={styles.for_you__recommendedBooks_link}
        key={item?.id}
      >
        <div
          className={`${styles.book_pill} ${styles.book_pill__subscriptionRequired}`}
        >
          Premium
        </div>
        <audio src={item?.audioLink}>Audio Link</audio>
        <figure className={styles.book_image__wrapper}>
          <Image
            src={item?.imageLink}
            className={styles.book_image}
            alt="img"
            width={300}
            height={300}
          />
        </figure>
        <div className={styles.recommended_book__title}>{item?.title}</div>
        <div className={styles.recommended_book__author}>{item?.author}</div>
        <div className={styles.recommended_book__subTitle}>
          {item?.subTitle}
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
              {Math.max(item?.averageRating)}
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <>
      <div>
        <div className={styles.for_you__title}>Suggested Books</div>
        <div className={styles.recommended_book__detailsText}></div>{" "}
        <div className={styles.for_you__subTitle}>Browse those books</div>
        <div className={styles.for_you__recommendedBooks}>
          {suggestedBooks.map((item) => {
            return renderHelper(item);
          })}
        </div>
      </div>
    </>
  );
};

export default SuggestedBooks;
