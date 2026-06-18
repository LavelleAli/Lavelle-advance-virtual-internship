"use client";

import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import LoginTrigger from "./loginmodal/LoginTrigger";
import Logout from "./loginmodal/Logout";

function Navbar() {
  const user = useSelector((state) => state.auth.user);

  return (
    // <nav className={styles.navbar}>
    //   <div className={styles.nav_wrapper}>
    //     <figure className="nav__img--mask">
    //       <Image
    //         className={styles.nav_logo}
    //         src="/logo.png"
    //         alt="logo"
    //         width={200}
    //         height={200}
    //       />
    //     </figure>
    //     <ul className={styles.nav_ul}>
    //       {user ? (
    //         <Logout
    //           as="li"
    //           className={`${styles.nav_list_items} ${styles.login}`}
    //         />
    //       ) : (
    //         <LoginTrigger
    //           as="li"
    //           className={`${styles.nav_list_items} ${styles.login}`}
    //         >
    //           Login
    //         </LoginTrigger>
    //       )}
    //       <li className={styles.nav_list_items}>About</li>
    //       <li className={styles.nav_list_items}>Contact</li>
    //       <li className={styles.nav_list_items}>Help</li>
    //     </ul>
    //   </div>
    // </nav>

    <nav class="nav">
      <div class="nav__wrapper">
        <figure class="nav__img--mask">
          <Image
            className={styles.nav_img}
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </figure>
        <ul class="nav__list--wrapper">
          {user ? (
            <Logout
              as="li"
              className={`${styles.nav_list} ${styles.nav_list__login}`}
            />
          ) : (
            <LoginTrigger
              as="li"
              className={`${styles.nav_list_items} ${styles.login}`}
            >
              Login
            </LoginTrigger>
          )}
          {/* <li class="nav__list nav__list--login">Login</li> */}
          <li class="nav__list nav__list--mobile">About</li>
          <li class="nav__list nav__list--mobile">Contact</li>
          <li class="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
