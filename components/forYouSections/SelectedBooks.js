"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "@/styles/ForYou.module.css";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

import axios from "axios";

const SelectedBooks = () => {
  const [books, setBooks] = useState(null);

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
      );
      setBooks(data[0]);
    } catch (error) {
      console.log("Error fetching book data", error);
    }
  });

  useEffect(() => {
    getData();
  }, [getData]);

  function renderHelper(booksInfo) {
    return (
      <>
        <div className={styles.for_you__title}>Selected just for you</div>
        <audio src={booksInfo?.audioLink}>Audio Link</audio>
        <a className={styles.selected__book} href="/book">
          <div className={styles.selected__book__subTitle}>
            <p className={styles.sub_text}>{booksInfo?.subTitle}</p>
          </div>
          <div className={styles.selected__book__line}></div>
          <div className={styles.selected__book__content}>
            <figure className={styles.book_image__wrapper}>
              <Image
                src={booksInfo?.imageLink}
                className={styles.book_image}
                width={200}
                height={200}
                alt="img"
              />
            </figure>
            <div className={styles.selected_book__text}>
              <div className={styles.selected_book__title}>
                {booksInfo?.title}
              </div>
              <div className={styles.selected_book__author}>
                {booksInfo?.author}
              </div>
              <div className={styles.selected_book__durationWrapper}>
                <div className={styles.selected_book__icon}>
                  <FaPlayCircle className={styles.playCircleStyle} />
                </div>
                <div className={styles.selected_book__duration}>
                  {" "}
                  3 mins 23 secs
                </div>
              </div>
            </div>
          </div>
        </a>
      </>
    );
  }

  return <>{books && renderHelper(books)}</>;
};

export default SelectedBooks;
