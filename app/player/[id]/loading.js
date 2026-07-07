import SideAndSearchBar from "@/components/SideAndSearchbar/SideAndSearchBar";
import styles from "@/styles/ForYou.module.css";
import PlayerTitleSkeleton from "@/components/playerSections/PlayerTitleSkeleton";

const PlayerLoading = () => {
  return (
    <>
      <div className={styles.sideBar_inPlayer}>
        <SideAndSearchBar />
      </div>
      <PlayerTitleSkeleton />
    </>
  );
};

export default PlayerLoading;
