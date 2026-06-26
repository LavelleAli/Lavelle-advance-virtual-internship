import React from "react";
import Image from "next/image";
import styles from '@/styles/ChoosPlane.module.css'

const PlanHeader = () => {
  return (
    <div>
      <div className={styles.plan_header__wrapper}>
        <div className={styles.plan_header}>
          <div className={styles.plan_title}>
            Get unlimited access to many amazing books to read
          </div>
          <div className={styles.plan_subTitle}>
            Turn ordinary moments into amazing learning opprotunities
          </div>
          <figure className={styles.plan_img__mask}>
            <Image
              src={"/pricing-top.png"}
              width={200}
              height={200}
              alt="img"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default PlanHeader;
