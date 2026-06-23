"use client";
import { useState, useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import styles from "@/styles/BookInfo.module.css";
import Image from "next/image";

const BookImage = () => {

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
    return(
        <>
        <div className={styles.inner_book__imgWrapper}>
            <figure className={styles.inner_book__imgWrapper}>
                <Image
                    src={item?.imageLink}
                    alt={item?.title}
                    width={300}
                    height={300}
                />
            </figure>
        </div>
        </>
    )   
  }


  return (
    <>
      {book && renderHelper(book)}
    </>
  )
}

export default BookImage
