"use client";
import { useCallback, useState, useEffect } from "react";
import styles from "@/styles/ForYou.module.css";
import Image from "next/image";
import axios from "axios";

const RecommendedBooks = () => {
  const [recBooks, setRecBooks] = useState([]);

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
      );
      setRecBooks(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  function renderNonPremium(book) {
    return (
      <a
        key={book.id}
        href={`/book/${book.id}`}
        className={styles.for_you__recommendedBooks_link}
      >
        <audio src={book.audioLink}></audio>
        <figure className={styles.book_image__wrapper}>
          <Image
            src={book.imageLink}
            className={styles.book_image}
            width={100}
            height={100}
            alt={book.title}
          />
        </figure>
        <div className={styles.recommended_book__title}>{book.title}</div>
        <div className={styles.recommended_book__author}>{book.author}</div>
        <div className={styles.recommended_book__subTitle}>{book.subTitle}</div>
      </a>
    );
  }

  function renderPremium(book) {
    return (
      <a
        key={book.id}
        href={`/book/${book.id}`}
        className={styles.for_you__recommendedBooks_link}
      >
        <div
          className={`${styles.book_pill} ${styles.book_pill__subscriptionRequired}`}
        >
          Premium
        </div>
        <audio src={book?.audioLink}></audio>
        <figure className={styles.book_image__wrapper}>
          <Image
            src={book?.imageLink}
            className={styles.book_image}
            width={100}
            height={100}
            alt={book.title}
          />
        </figure>
        <div className={styles.recommended_book__title}>{book?.title}</div>
        <div className={styles.recommended_book__author}>{book?.author}</div>
        <div className={styles.recommended_book__subTitle}>
          {book?.subTitle}
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
          {recBooks.map((book) => renderNonPremium(book)).slice(0, 2)}

          {recBooks.map((book) => renderPremium(book)).slice(2)}
        </div>
      </div>
    </>
  );
};

export default RecommendedBooks;
