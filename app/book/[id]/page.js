import React from "react";
import styles from "@/styles/ForYou.module.css";
import bookStyles from "@/styles/BookInfo.module.css";
import BookBasicInfo from "@/components/bookInfoSections/BookBasicInfo";
import BookAbout from "@/components/bookInfoSections/BookAbout";
import BookImage from "@/components/bookInfoSections/BookImage";
import SideAndSearchBar from "@/components/SideAndSearchbar/SideAndSearchBar";


const bookInfoPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );
  const book = await res.json();
 

  return (
    <>
    <SideAndSearchBar/>     
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={bookStyles.innerBookWrapper}>
            <div className={bookStyles.innerBook}>
              <BookBasicInfo book={book} />
              <BookAbout book={book} />
            </div>
            <BookImage book={book} />
          </div>
        </div>
      </div>
    </>
  );
};

export default bookInfoPage;
