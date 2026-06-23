"use client";
import { useState, useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import styles from "@/styles/BookInfo.module.css";

const BookAbout = () => {
  const { id } = useParams();
  const [book, setBook] = useState();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
      );
      setBook(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching book data", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function renderHelper(item) {
    return (
      <>
        <div className={styles.inner_book__secondaryTitle}>
          {" "}
          What&apos;s it about
        </div>
        <div className={styles.inner_book__tagsWrapper}>
            <div className="inner_book__tag">
                {item?.tags?.[0]}
            </div>
            <div className="inner_book__tag">
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
      This is the about Section
      {book && renderHelper(book)}
    </>
  );
};

export default BookAbout;
