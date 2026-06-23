"use client";
import styles from "@/styles/BookInfo.module.css";
import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { FaRegStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FiMic } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBookOpenText } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";

const BookBasicInfo = () => {
  const { id } = useParams();
  const [book, setBook] = useState();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
      );
      setBook(data);
    } catch (error) {
      console.log("Error fetching book data", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function renderHelper(item, id) {
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
                {item?.totalRating}
              </div>
            </div>

            <div className={styles.inner_book__description}>
              <div className={styles.inner_book__icon}>
                <CiClock2 />
              </div>
              <div className={styles.inner_book__duration}>03:24</div>
            </div>

            <div className={styles.inner_book__description}>
              <div className={styles.inner_book__icon}>
                <FiMic />
              </div>
              <div className={styles.inner_book__type}>{item?.type}</div>
            </div>

            <div className={styles.inner_book__description}>
              <div className={styles.inner_book__icon}>
                <HiOutlineLightBulb />
              </div>
              <div className={styles.inner_book__keyIdeas}>
                {item?.keyIdeas}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inner_book__readBtnWrapper}>
          <button className="inner_book__readBtn">
            <div className="inner_book__readIcon">
              <LuBookOpenText />
            </div>
            <div className="inner_book__readText">Read</div>
          </button>
          <button className="inner_book__readBtn">
            <div className="inner_book__readIcon">
              <FiMic />
            </div>
            <div className="inner_book__readText">Listen</div>
          </button>
        </div>
        <div className={styles.inner_book__bookmark}>
          <div className="inner_book__readIcon">
            <FaRegBookmark />
          </div>
          <div className="inner_book__readText">Add title to my Library</div>
        </div>
      </>
    );
  }

  return (
    <>
      This is the Basic info Section
      {book && renderHelper(book)}
    </>
  );
};

export default BookBasicInfo;
