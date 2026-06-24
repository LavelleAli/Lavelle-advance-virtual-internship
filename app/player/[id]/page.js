import SideAndSearchBar from "@/components/SideAndSearchbar/SideAndSearchBar";
import React from "react";
import styles from "@/styles/ForYou.module.css";
import PlayerTitle from "@/components/playerSections/PlayerTitle";

const PlayerPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );
  const book = await res.json();
  console.log(book);

  return (
    <>
      <SideAndSearchBar />
      <PlayerTitle book={book} />
      {/* <div className={styles.row}>
        <div className={styles.container}>
        </div>
      </div> */}
    </>
  );
};

export default PlayerPage;
