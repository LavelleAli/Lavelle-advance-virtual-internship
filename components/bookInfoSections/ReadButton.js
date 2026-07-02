"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getPremiumStatus } from "@/firebase/firebase";

const ReadButton = ({ id, className, children }) => {
  const router = useRouter();
  const [premiumUser, setPremiumUser] = useState(null)

  useEffect(() => {
    const checkPremiumStatus = async () => {
      const status = await getPremiumStatus();
      setPremiumUser(status);
    };
    checkPremiumStatus();
  }, []);

  return (
    <button className={className} onClick={() => 
    premiumUser === false 
    ? router.push(`/choose-plan`)
    : router.push(`/player/${id}`)}>
      {children}
    </button>
  );
};

export default ReadButton;
