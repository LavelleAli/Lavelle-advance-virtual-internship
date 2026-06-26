import React from "react";
import styles from '@/styles/ChoosPlane.module.css'

const PlanCards = () => {
  return (
    <>
      <div className={styles.section_title}>Choose the plan that fits you</div>
      <div className={`${styles.plan_card} ${styles.plan_card__active}`}>
        <div className={styles.plan_card__circle}>
            <div className={styles.plan_card__dot}></div>
        </div>
        <div className={styles.plan_card__content}>
            <div className={styles.plan_card__title}>Preium Plus Yearly</div>
            <div className={styles.plan_card__price}>$99.99/year</div>
            <div className={styles.plan_card__text}>7-day free trail included</div>
        </div>
      </div>
      <div className={styles.plan_card__seperator}>
        <div className={styles.plan_seperator}>or</div>
      </div>
      <div className={styles.plan_card}>
        <div className={styles.plan_card__circle}></div>
        <div className={styles.plan_card__content}>
            <div className={styles.plan_card__title}>Preium Monthly</div>
            <div className={styles.plan_card__price}>$9.99/month</div>
            <div className={styles.plan_card__text}>No trail included</div>
        </div>
      </div>
      <div className={styles.plan_card__cta}>
        <span className={styles.btn_wrapper}>
            <button className={styles.btn}>
                <span> Start your free 7-day trail</span>
            </button>
        </span>
        <div className={styles.plan_disclaimer}></div>
      </div>
    </>
  );
};

export default PlanCards;
