import styles from "@/styles/BookInfo.module.css";
import Image from "next/image";

const BookImage = ({ book }) => {
  function renderHelper(item) {
    return(
        <>
        <div className={styles.inner_book__imgWrapper}>
            <figure className={styles.book__image__wrapper}>
                <Image
                  className={styles.book_image}
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
