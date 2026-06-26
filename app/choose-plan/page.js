import React from "react";
import styles from '@/styles/ChoosPlane.module.css';
import Image from "next/image";


const Chooseplane = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapper} ${styles.wrapper_full}`}>
            <div className={`${styles.sideBar_ovaerLay} ${styles.sideBar_ovaerLay__hidden}`}></div>
            <div className={styles.plan}>
                <div className={styles.plan_header__wrapper}>
                    <Image src={"/pricing-top.png"} width={200} height={200} alt="img" />
                </div>
                <div className={styles.row}>
                    <div className={styles.container}>
                        <div className={styles.plan_features__wrapper}></div>
                        <div className={styles.section_title}>Choose the plan that fits you</div>
                        <div className={`${styles.plan_card} ${styles.plan_card__active}`}></div>
                        <div className={styles.plan_card__seperator}></div>
                        <div className={styles.plan_card}></div>
                        <div className={styles.plan_card__cta}></div>
                        <div className={styles.faq_wrapper}></div>
                    </div>
                </div>
                <section id="footer"></section>
            </div>
        </div>

      </div>
    </>
  );
};

export default Chooseplane;
