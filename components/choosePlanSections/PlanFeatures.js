import React from "react";
import styles from "@/styles/ChoosPlane.module.css";
import { AiFillFileText } from "react-icons/ai";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

const PlanFeatures = () => {
  return (
    <>
      <div className={styles.plan_features__wrapper}>
        <div className={styles.plan_features}>
          <figure className={styles.plan_feature__icon}>
            <AiFillFileText className={styles.icon_img} />
          </figure>
          <div className={styles.plan_feature__text}>
            <b>Key ideas in a few minutes</b> with many books to read
          </div>
        </div>
        <div className={styles.plan_features}>
          <figure className={styles.plan_feature__icon}>
            <RiPlantFill className={styles.icon_img} />
          </figure>
          <div className={styles.plan_feature__text}>
            <b>3 million</b> people growing with Summarist everyday
          </div>
        </div>
        <div className={styles.plan_features}>
          <figure className={styles.plan_feature__icon}>
            <FaHandshake className={styles.icon_img} />
          </figure>
          <div className={styles.plan_feature__text}>
            <b>Precise recommendations</b> collections curated by experts
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanFeatures;
