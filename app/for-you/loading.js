import styles from "@/styles/ForYou.module.css";
import SideAndSearchBar from "@/components/SideAndSearchbar/SideAndSearchBar";
import SelectedBooksSkeleton from "@/components/forYouSections/SelectedBooksSkeleton";
import RecommendedBooksSkeleton from "@/components/forYouSections/RecommendedBooksSkeleton";
import SuggestedBooksSkeleton from "@/components/forYouSections/SuggestedBooksSkeleton";

const ForYouLoading = () => {
  return (
    <>
      <SideAndSearchBar />
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.for_you__wrapper}>
            <SelectedBooksSkeleton />
            <RecommendedBooksSkeleton />
            <SuggestedBooksSkeleton />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForYouLoading;
