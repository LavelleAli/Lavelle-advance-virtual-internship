import React from 'react'
import LoginTrigger from "@/components/loginmodal/LoginTrigger";
import LoginModalGate from "@/components/loginmodal/LoginModalGate";
import styles from "@/styles/ForYou.module.css";
import {
  FaMagnifyingGlass,
  FaHouse,
  FaRegBookmark,
  FaPen,
  FaGear,
  FaRegCircleQuestion,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import Image from "next/image";


const SideAndSearchBar = () => {
  return (
    <>
      <LoginModalGate/>
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
                  <FaMagnifyingGlass className={styles.react_icon} />
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
                <FaHouse className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>For you</div>
            </a>

            <a className={styles.sideBar_link__wrapper} href="/for-you">
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <FaRegBookmark className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>My Library</div>
            </a>

            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <FaPen className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>HighLights</div>
            </div>
            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <FaMagnifyingGlass className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>Search</div>
            </div>
          </div>
          <div className={styles.sideBer__bottom}>
            <a className={styles.sideBar_link__wrapper} href="/settings">
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <FaGear className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>Settings</div>
            </a>

            <div className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}>
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <FaRegCircleQuestion className={styles.react_icon__sidebar}/>
              </div>
              <div className={styles.sideBar_link__textNA}>Help & Support</div>
            </div>

            <a className={`${styles.sideBar_link__wrapper}`}  >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <FaArrowRightFromBracket className={styles.react_icon__sidebar} />
              </div>
              <LoginTrigger className={styles.sideBar_link__text}>Login</LoginTrigger>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideAndSearchBar
