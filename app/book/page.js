"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/styles/ForYou.module.css";
import bookStyles from "@/styles/BookInfo.module.css";
import BookBasicInfo from "@/components/bookInfoSections/BookBasicInfo";
import BookAbout from "@/components/bookInfoSections/BookAbout";
import BookImage from "@/components/bookInfoSections/BookImage";
import SideAndSearchBar from "@/components/SideAndSearchbar/SideAndSearchBar";
import AddBookToCollection from "@/components/bookInfoSections/AddBookToCollection";
import BookBasicInfoSkeleton from "@/components/bookInfoSections/BookBasicInfoSkeleton";
import BookAboutSkeleton from "@/components/bookInfoSections/BookAboutSkeleton";
import BookImageSkeleton from "@/components/bookInfoSections/BookImageSkeleton";
import AddBookToCollectionSkeleton from "@/components/bookInfoSections/AddBookToCollectionSkeleton";

const BookInfoContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!id) return;
    setBook(null);
    fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
      .then((res) => res.json())
      .then(setBook)
      .catch((error) => console.log("Error fetching book:", error));
  }, [id]);

  return (
    <>
      <SideAndSearchBar />
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={bookStyles.innerBookWrapper}>
            <div className={bookStyles.innerBook}>
              {book ? (
                <>
                  <BookBasicInfo book={book} />
                  <AddBookToCollection book={book} />
                  <BookAbout book={book} />
                </>
              ) : (
                <>
                  <BookBasicInfoSkeleton />
                  <AddBookToCollectionSkeleton />
                  <BookAboutSkeleton />
                </>
              )}
            </div>
            {book ? <BookImage book={book} /> : <BookImageSkeleton />}
          </div>
        </div>
      </div>
    </>
  );
};

const BookInfoPage = () => {
  return (
    <Suspense
      fallback={
        <>
          <SideAndSearchBar />
          <div className={styles.row}>
            <div className={styles.container}>
              <div className={bookStyles.innerBookWrapper}>
                <div className={bookStyles.innerBook}>
                  <BookBasicInfoSkeleton />
                  <AddBookToCollectionSkeleton />
                  <BookAboutSkeleton />
                </div>
                <BookImageSkeleton />
              </div>
            </div>
          </div>
        </>
      }
    >
      <BookInfoContent />
    </Suspense>
  );
};

export default BookInfoPage;
