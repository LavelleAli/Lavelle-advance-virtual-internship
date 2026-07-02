"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getPremiumStatus } from "@/firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "@/redux/slices/loginModal";

const ListenButton = ({ id, className, children }) => {
  const router = useRouter();
  const [premiumUser, setPremiumUser] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkPremiumStatus = async () => {
      const status = await getPremiumStatus();
      setPremiumUser(status);
    };
    checkPremiumStatus();
  }, []);

  return (
    <button
      className={className}
      onClick={() => {
        if (!user) {
          return dispatch(openModal());
        }
        premiumUser === false
          ? router.push(`/choose-plan`)
          : router.push(`/player/${id}`);
      }}
    >
      {children}
    </button>
  );
};

export default ListenButton;
