import React from "react";
import styles from '@/styles/ChoosPlane.module.css'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FAQSection = () => {
  return (
    <>
      <div className={styles.faq_wrapper}>
        <div className={styles.accordion_card}>
          <div className={styles.accordion_header}>
            <div className={styles.accordion_title}></div>
            <IoIosArrowUp />
            {/* <IoIosArrowDown /> */}
            
          </div>
          <div className={styles.collapse_show}>
            <div className={styles.accordion_body}>
              Begin your complimentary 7-day trial with a Summarist annual
              membership. You are under no obligation to continue your
              subscription, and you will only be billed when the trial period
              expires. With Premium access, you can learn at your own pace and
              as frequently as you desire, and you may terminate your
              subscription prior to the conclusion of the 7-day free trial.
            </div>
          </div>
        </div>
        <div className={styles.accordion_card}>
          <div className={styles.accordion_header}>
            <div className={styles.accordion_title}></div>
            <IoIosArrowUp />
            {/* <IoIosArrowDown /> */}
            
          </div>
          <div className={styles.collapse}>
            <div className={styles.accordion_body}>
              While an annual plan is active, it is not feasible to switch to a
              monthly plan. However, once the current month ends, transitioning
              from a monthly plan to an annual plan is an option.
            </div>
          </div>
        </div>
        <div className={styles.accordion_card}>
          <div className={styles.accordion_header}>
            <div className={styles.accordion_title}></div>
            <IoIosArrowUp />
            {/* <IoIosArrowDown /> */}
            
          </div>
          <div className={styles.collapse}>
            <div className={styles.accordion_body}>
              Premium membership provides you with the ultimate Summarist
              experience, including unrestricted entry to many best-selling
              books high-quality audio, the ability to download titles for
              offline reading, and the option to send your reads to your Kindle.
            </div>
          </div>
        </div>
        <div className={styles.accordion_card}>
          <div className={styles.accordion_header}>
            <div className={styles.accordion_title}></div>
            <IoIosArrowUp />
            {/* <IoIosArrowDown /> */}
            
          </div>
          <div className={styles.collapse}>
            <div className={styles.accordion_body}>
              You will not be charged if you cancel your trial before its
              conclusion. While you will not have complete access to the entire
              Summarist library, you can still expand your knowledge with one
              curated book per day.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
