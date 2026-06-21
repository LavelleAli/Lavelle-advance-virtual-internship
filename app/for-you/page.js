// 'use client'
// import { useState } from "react";
import styles from "@/styles/ForYou.module.css";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiBallPenLine } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import SelectedBooks from "@/components/forYouSections/SelectedBooks";
import RecommendedBooks from "@/components/forYouSections/RecommendedBooks";
import SuggestedBooks from "@/components/forYouSections/SuggestedBooks";

function ForYou() {
  return (
    <>
      <div className={styles.search_background}>
        <div className={styles.search_wrapper}>
          <figure></figure>
          <div className={styles.search_content}>
            <div className={styles.search}>
              <div className={styles.search_input__wrapper}>
                <input
                  className={styles.search_input}
                  type="text"
                  placeholder="Search for books"
                />
                <div className={styles.search_icon}>
                  <GoSearch className={styles.react_icon} />
                </div>
              </div>
            </div>
            <div className={styles.sideBar__toggleBtn}></div>
          </div>
        </div>
      </div>
      <div className={styles.sideBar}>
        <div className={styles.sideBar_logo}>
          <Image src="/logo.png" alt="logo" width={200} height={200} />
        </div>
        <div className={styles.sideBar__wrapper}>
          <div className={styles.sideBar__top}>
            <a className={styles.sideBar_link__wrapper} href="/for-you">
              <div
                className={`${styles.sideBar_link__line} ${styles.active__tab}`}
              ></div>
              <div className={styles.sideBar_icon_wrapper}>
                <AiOutlineHome className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>For you</div>
            </a>

            <a className={styles.sideBar_link__wrapper} href="/for-you">
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <BsBookmark className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>My Library</div>
            </a>

            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <RiBallPenLine className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>HighLights</div>
            </div>
            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <GoSearch className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>Search</div>
            </div>
          </div>
          <div className={styles.sideBer__bottom}>
            <a className={styles.sideBar_link__wrapper} href="/for-you">
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <VscSettingsGear className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>Settings</div>
            </a>

            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <IoIosHelpCircleOutline
                  className={styles.react_icon__sidebar}
                />
              </div>
              <div className={styles.sideBar_link__text}>Help & Support</div>
            </div>
            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <MdOutlineLogout className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>Login</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.for_you__wrapper}>
            <SelectedBooks />
            <RecommendedBooks />
            <SuggestedBooks />
          </div>
        </div>
      </div>
    </>
  );
}

export default ForYou;
