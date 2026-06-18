import React from "react";
import styles from  "../styles/Navbar.module.css"
import Image from "next/image";
import LoginTrigger from "./LoginTrigger";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_wrapper}>
        <figure className="nav__img--mask">
          <Image className={styles.nav_logo} src="/logo.png" alt="logo" width={200} height={200} />
        </figure>
        <ul className={styles.nav_ul}>
          <LoginTrigger as="li" className={`${styles.nav_list_items} ${styles.login}`}>Login</LoginTrigger>
          <li className={styles.nav_list_items}>About</li>
          <li className={styles.nav_list_items}>Contact</li>
          <li className={styles.nav_list_items}>Help</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
