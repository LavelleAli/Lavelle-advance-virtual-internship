// 'use client'
// import { useState } from "react";
import styles from "@/styles/ForYou.module.css";
import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiBallPenLine } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";

function ForYou() {
  return (
    <>
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
                  <GoSearch className={styles.react_icon} />
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
                <AiOutlineHome className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>For you</div>
            </a>

            <a className={styles.sideBar_link__wrapper} href="/for-you">
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <BsBookmark className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>My Library</div>
            </a>

            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <RiBallPenLine className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>HighLights</div>
            </div>
            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <GoSearch className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>Search</div>
            </div>
          </div>
          <div className={styles.sideBer__bottom}>
            <a className={styles.sideBar_link__wrapper} href="/for-you">
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <VscSettingsGear className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>Settings</div>
            </a>

            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <IoIosHelpCircleOutline
                  className={styles.react_icon__sidebar}
                />
              </div>
              <div className={styles.sideBar_link__text}>Help & Support</div>
            </div>
            <div
              className={`${styles.sideBar_link__wrapper} ${styles.sideBar_link__notAllowed}`}
            >
              <div className={styles.sideBar_link__line}></div>
              <div className={styles.sideBar_icon_wrapper}>
                <MdOutlineLogout className={styles.react_icon__sidebar} />
              </div>
              <div className={styles.sideBar_link__text}>Login</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.for_you__wrapper}>
            <div className={styles.for_you__title}>Selected just for you</div>
            {/* <audio src=""></audio> */}
            <a className={styles.selected__book} href="/book">
              <div className={styles.selected__book__subTitle}>
                How Constant Innovation Creates Radically Successful Businesses
              </div>
              <div className={styles.selected__book__line}></div>
              <div className={styles.selected__book__content}>
                <figure className={styles.book_image__wrapper}>
                  <Image className={styles.book_image} />
                </figure>
                <div className={styles.selected_book__text}>
                  <div className={styles.selected_book__title}>
                    The Lean Startup
                  </div>
                  <div className={styles.selected_book__author}>Eric Ries</div>
                  <div className={styles.selected_book__durationWrapper}>
                    <div className={styles.selected_book__icon}>
                      <FaPlayCircle />
                    </div>
                    <div className={styles.selected_book__duration}>
                      {" "}
                      3 mins 23 secs
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div>
              <div className={styles.for_you__title}> Recommended For You</div>
              <div className={styles.for_you__subTitle}>
                {" "}
                We think you'll like these
              </div>
              <div className={styles.for_you__recommendedBooks}>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <audio src=""></audio>
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}>
                    book title
                  </div>
                  <div className={styles.recommended_book__author}>
                    book author
                  </div>
                  <div className={styles.recommended_book__subTitle}>
                    book subtitle
                  </div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.4
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <audio src=""></audio>
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}>
                    book title
                  </div>
                  <div className={styles.recommended_book__author}>
                    book author
                  </div>
                  <div className={styles.recommended_book__subTitle}>
                    book subtitle
                  </div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.4
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <audio src=""></audio>
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}>
                    book title
                  </div>
                  <div className={styles.recommended_book__author}>
                    book author
                  </div>
                  <div className={styles.recommended_book__subTitle}>
                    book subtitle
                  </div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.4
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <audio src=""></audio>
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}>
                    book title
                  </div>
                  <div className={styles.recommended_book__author}>
                    book author
                  </div>
                  <div className={styles.recommended_book__subTitle}>
                    book subtitle
                  </div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.4
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <audio src=""></audio>
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}>
                    book title
                  </div>
                  <div className={styles.recommended_book__author}>
                    book author
                  </div>
                  <div className={styles.recommended_book__subTitle}>
                    book subtitle
                  </div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.4
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <audio src=""></audio>
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}>
                    book title
                  </div>
                  <div className={styles.recommended_book__author}>
                    book author
                  </div>
                  <div className={styles.recommended_book__subTitle}>
                    book subtitle
                  </div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.4
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <audio src=""></audio>
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}>
                    book title
                  </div>
                  <div className={styles.recommended_book__author}>
                    book author
                  </div>
                  <div className={styles.recommended_book__subTitle}>
                    book subtitle
                  </div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.4
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <audio src=""></audio>
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}>
                    book title
                  </div>
                  <div className={styles.recommended_book__author}>
                    book author
                  </div>
                  <div className={styles.recommended_book__subTitle}>
                    book subtitle
                  </div>
                  <div
                    className={styles.recommended_book__detailsWrapper}
                  ></div>
                </a>
              </div>
            </div>
            <div>
              <div className={styles.for_you__title}>Suggested Books</div>
              <div className={styles.recommended_book__detailsText}></div>{" "}
              <div className={styles.for_you__subTitle}>Browse those books</div>
              <div className={styles.for_you__recommendedBooks}>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <div
                    className={`${styles.book_pill} ${styles.book_pill__subscriptionRequired}`}
                  >
                    Premium
                  </div>
                  {/* <audio src=""></audio> */}
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} alt="" />
                  </figure>
                  <div className={styles.recommended_book__title}></div>
                  <div className={styles.recommended_book__author}></div>
                  <div className={styles.recommended_book__subTitle}></div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.3
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <div
                    className={`${styles.book_pill} ${styles.book_pill__subscriptionRequired}`}
                  >
                    Premium
                  </div>
                  {/* <audio src=""></audio> */}
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}></div>
                  <div className={styles.recommended_book__author}></div>
                  <div className={styles.recommended_book__subTitle}></div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.3
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <div
                    className={`${styles.book_pill} ${styles.book_pill__subscriptionRequired}`}
                  >
                    Premium
                  </div>
                  {/* <audio src=""></audio> */}
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}></div>
                  <div className={styles.recommended_book__author}></div>
                  <div className={styles.recommended_book__subTitle}></div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.3
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <div
                    className={`${styles.book_pill} ${styles.book_pill__subscriptionRequired}`}
                  >
                    Premium
                  </div>
                  {/* <audio src=""></audio> */}
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}></div>
                  <div className={styles.recommended_book__author}></div>
                  <div className={styles.recommended_book__subTitle}></div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.3
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <div
                    className={`${styles.book_pill} ${styles.book_pill__subscriptionRequired}`}
                  >
                    Premium
                  </div>
                  {/* <audio src=""></audio> */}
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}></div>
                  <div className={styles.recommended_book__author}></div>
                  <div className={styles.recommended_book__subTitle}></div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.3
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <div
                    className={`${styles.book_pill} ${styles.book_pill__subscriptionRequired}`}
                  >
                    Premium
                  </div>
                  {/* <audio src=""></audio> */}
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}></div>
                  <div className={styles.recommended_book__author}></div>
                  <div className={styles.recommended_book__subTitle}></div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.3
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className={styles.for_you__recommendedBooks_link}>
                  <div
                    className={`${styles.book_pill} ${styles.book_pill__subscriptionRequired}`}
                  >
                    Premium
                  </div>
                  {/* <audio src=""></audio> */}
                  <figure className={styles.book_image__wrapper}>
                    <Image className={styles.book_image} />
                  </figure>
                  <div className={styles.recommended_book__title}></div>
                  <div className={styles.recommended_book__author}></div>
                  <div className={styles.recommended_book__subTitle}></div>
                  <div className={styles.recommended_book__detailsWrapper}>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        03:24
                      </div>
                    </div>
                    <div className={styles.recommended_book__details}>
                      <div className={styles.recommended_book__detailsIcon}>
                        <Image className={styles.book_image} />
                      </div>
                      <div className={styles.recommended_book__detailsText}>
                        4.3
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForYou;
