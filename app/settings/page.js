"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "@/styles/Settings.module.css";
import forYouStyles from "@/styles/ForYou.module.css";
import SideAndSearchBar from "@/components/SideAndSearchbar/SideAndSearchBar";
import Logout from "@/components/loginmodal/Logout";
import { getPortalUrl, getPremiumStatus } from "@/firebase/firebase";

const Settings = () => {
  const user = useSelector((state) => state.auth.user);
  const [isPremium, setIsPremium] = useState(false);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!user) return;
    getPremiumStatus()
      .then(setIsPremium)
      .catch((error) => console.log("Could not load subscription status", error))
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
          <div className={styles.card}>
            {!user && <div className={styles.email}>Log in to manage your account</div>}
            {user && (
              <>
                <div className={styles.email}>{user.email || user.displayName}</div>
                {isLoadingStatus && <div className={styles.status}>Checking subscription...</div>}
                {!isLoadingStatus && (
                  <div className={`${styles.status} ${isPremium ? styles.status__premium : styles.status__standard}`}>
                    {isPremium ? "Premium Member" : "Free Plan"}
                  </div>
                )}
                <div className={styles.actions}>
                  {!isLoadingStatus && isPremium && (
                    <button className={styles.btn} onClick={handleManageSubscription} disabled={isRedirecting}>
                      {isRedirecting ? "Redirecting..." : "Manage Subscription"}
                    </button>
                  )}
                  <Logout className={styles.btn} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
