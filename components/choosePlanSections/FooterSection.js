import React from "react";
import styles from  '@/styles/ChoosPlane.module.css';

const FooterSection = () => {
  return (
    <>
      <section id="footer">
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.footer_top__wrapper}>
              <div className={styles.footer_block}>
                <div className={styles.footer_link_title}>Actions</div>
                <div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Summarist Magazine</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Cancel Subscription</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Help</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>
              <div className={styles.footer_block}>
                <div className={styles.footer_link_title}>Useful Links</div>
                <div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Pricing</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Summarist Business</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Gift Cards</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Authors & Publishers</a>
                  </div>
                </div>
              </div>
              <div className={styles.footer_block}>
                <div className={styles.footer_link_title}>Company</div>
                <div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">About</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Careers</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Partners</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Code of Conduct</a>
                  </div>
                </div>
              </div>
              <div className={styles.footer_block}>
                <div className={styles.footer_link_title}>Other</div>
                <div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Sitemap</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Legal Notice</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Terms of Service</a>
                  </div>
                  <div className={styles.footer_link__wrapper}>
                    <a href="">Privacy Policies</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer_copyright__wrapper}>
                <div className={styles.footer_copyright}> Copyright c 2023 Summarist</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
