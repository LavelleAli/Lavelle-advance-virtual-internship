"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "@/styles/Settings.module.css";
import forYouStyles from "@/styles/ForYou.module.css";
import SideAndSearchBar from "@/components/SideAndSearchbar/SideAndSearchBar";
import { getPortalUrl, getPremiumStatus, auth } from "@/firebase/firebase";
import Link from "next/link";
import Image from "next/image";
import LoginTrigger from "@/components/loginmodal/LoginTrigger";

const Settings = () => {
  const user = useSelector((state) => state.auth.user);
  const [isPremium, setIsPremium] = useState(null);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (!user) return;
    setUserEmail(
      auth.currentUser?.email ?? "No email account associated with this user",
    );
    getPremiumStatus()
      .then(setIsPremium)
      .catch((error) =>
        console.log("Could not load subscription status", error),
      )
      .finally(() => setIsLoadingStatus(false));
  }, [user]);

  const handleManageSubscription = async () => {
    setIsRedirecting(true);
    try {
      const portalUrl = await getPortalUrl();
      window.location.href = portalUrl;
    } catch (error) {
      console.log("Could not open subscription portal", error);
      toast.error("Could not open subscription management, please try again");
      setIsRedirecting(false);
    }
  };

  return (
    <>
      <SideAndSearchBar />
      <div className={forYouStyles.row}>
        <div className={forYouStyles.container}>
          <div className={styles.header}>
            <h1>Settings</h1>
          </div>
          <div className={styles.separator}></div>

          <div className={styles.card}>
            {!user && (
              <>
                <div className={styles.login_wrapper}>
                  <Image
                    className={styles.login_img}
                    src="/login.png"
                    alt="Login"
                    width={500}
                    height={500}
                  />
                  <div className={styles.email}>
                    Log in to see your account details.
                  </div>
                  <LoginTrigger className={styles.btn}>Login</LoginTrigger>
                </div>
              </>
            )}
            {user && (
              <>
                {isLoadingStatus && (
                  <div className={styles.status}>Checking subscription...</div>
                )}

                <div className={styles.top_card}>Your Subscription Plan</div>
                {!isLoadingStatus && (
                  <div
                    className={`${styles.status} ${isPremium ? styles.status__premium : styles.status__standard}`}
                  >
                    {isPremium ? "Premium" : "Basic"}
                  </div>
                )}

                <div className={styles.actions}>
                  {!isLoadingStatus && isPremium && (
                    <button
                      className={styles.btn}
                      onClick={handleManageSubscription}
                      disabled={isRedirecting}
                    >
                      {isRedirecting ? "Redirecting..." : "Manage Subscription"}
                    </button>
                  )}
                  {!isLoadingStatus && !isPremium && (
                    <Link href={`/choose-plan`}>
                      <button className={styles.btn}>Upgrade To Premium</button>
                    </Link>
                  )}
                </div>
                <div className={styles.separator}></div>
                <div className={styles.top_card}>
                  <h1>Email</h1>
                </div>
                {userEmail}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
