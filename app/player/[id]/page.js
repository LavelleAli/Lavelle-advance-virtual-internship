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
      <div className={styles.sideBar_inPlayer}>
        <SideAndSearchBar />
      </div>
      <PlayerTitle book={book} />
    </>
  );
};

export default PlayerPage;
