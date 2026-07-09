"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SideAndSearchBar from "@/components/SideAndSearchbar/SideAndSearchBar";
import styles from "@/styles/ForYou.module.css";
import PlayerTitle from "@/components/playerSections/PlayerTitle";
import PlayerTitleSkeleton from "@/components/playerSections/PlayerTitleSkeleton";

const PlayerContent = () => {
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
      <div className={styles.sideBar_inPlayer}>
        <SideAndSearchBar />
      </div>
      {book ? <PlayerTitle book={book} /> : <PlayerTitleSkeleton />}
    </>
  );
};

const PlayerPage = () => {
  return (
    <Suspense
      fallback={
        <>
          <div className={styles.sideBar_inPlayer}>
            <SideAndSearchBar />
          </div>
          <PlayerTitleSkeleton />
        </>
      }
    >
      <PlayerContent />
    </Suspense>
  );
};

export default PlayerPage;
