'use client'

import { useSelector } from "react-redux";
import LoginModal from "./LoginModal";

export default function LoginModalGate() {
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null;

  return <LoginModal />;
}
