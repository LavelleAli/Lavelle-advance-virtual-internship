'use client'

import { useDispatch } from "react-redux";
import { openModal } from "@/redux/slices/loginModal";

export default function LoginTrigger({ as: Tag = "button", className, children }) {
  const dispatch = useDispatch();

  return (
    <Tag className={className} onClick={() => dispatch(openModal())}>
      {children}
    </Tag>
  );
}
