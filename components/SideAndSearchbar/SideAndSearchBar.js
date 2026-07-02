"use client";
import React from "react";
import LoginTrigger from "@/components/loginmodal/LoginTrigger";
import LoginModalGate from "@/components/loginmodal/LoginModalGate";
import Logout from "@/components/loginmodal/Logout";
import { useSelector } from "react-redux";
import styles from "@/styles/ForYou.module.css";
import {
  FaRegBookmark,
  FaRegCircleQuestion,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { RiBallPenLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { RxMagnifyingGlass } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

const SideAndSearchBar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <LoginModalGate />
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
                  <RxMagnifyingGlass className={styles.react_icon} />
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
                <FaRegBookmark className={styles.react_icon__sidebar} />
              </div>
              <Link href={"/my-library"}>
                <div className={styles.sideBar_link__text}>My Library</div>
              </Link>
            </a>

            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <RiBallPenLine className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__textNA}>HighLights</div>
            </div>
            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <RxMagnifyingGlass className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__textNA}>Search</div>
            </div>
          </div>
          <div className={styles.sideBar__bottom}>
            <a className={styles.sideBar_link__wrapper} href="/settings">
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <GoGear className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>Settings</div>
            </a>

            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <FaRegCircleQuestion className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__textNA}>Help & Support</div>
            </div>

            <a className={`${styles.sideBar_link__wrapper}`}>
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <FaArrowRightFromBracket
                  className={styles.react_icon__sidebar}
                />
              </div>

              {user ? (
                <Logout className={styles.sideBar_link__text} />
              ) : (
                <LoginTrigger className={styles.sideBar_link__text}>
                  Login
                </LoginTrigger>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideAndSearchBar;
