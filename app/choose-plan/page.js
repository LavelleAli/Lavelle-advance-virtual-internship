import React from "react";
import styles from "@/styles/ChoosPlane.module.css";
import Image from "next/image";
import { AiFillFileText } from "react-icons/ai";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import PlanHeader from "@/components/choosePlanSections/PlanHeader";
import PlanFeatures from "@/components/choosePlanSections/PlanFeatures";
import PlanCards from "@/components/choosePlanSections/PlanCards";
import FAQSection from "@/components/choosePlanSections/FAQSection";
import FooterSection from "@/components/choosePlanSections/FooterSection";

const Chooseplane = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapper} ${styles.wrapper_full}`}>
          <div
            className={`${styles.sideBar_ovaerLay} ${styles.sideBar_ovaerLay__hidden}`}
          ></div>
          <div className={styles.plan}>
            <PlanHeader />
            <div className={styles.row}>
              <div className={styles.container}>
                <PlanFeatures />
                <PlanCards />
                <FAQSection />
              </div>
            </div>
            <FooterSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseplane;
