'use client'
import { useState } from "react";
import Image from "next/image";
import "../styles/LoginModal.css";
import { FaUser } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/loginModal";
import SignUpModal from "./SignUpModal";
import ResetPasswordModal from "./ResetPasswordModal";
import { login, googleSignIn, loginGuest } from "@/firebase/firebase";



const LoginModal = () => {
  const dispatch = useDispatch();
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState(false)

  const handleLogin = async () => {
    const ok = await login(email, password)
    if (ok) dispatch(closeModal())
  }

  const handleGuestLogin = async () => {
    const ok = await loginGuest()
    if (ok) dispatch(closeModal())
  }

  const handleGoogleLogin = async () => {
    const ok = await googleSignIn()
    if (ok) dispatch(closeModal())
  }

  if (showSignUp){
    return <SignUpModal/>
  }

  if (resetPassword) {
    return <ResetPasswordModal />
  }

  return (
    <>
    <div className="outer_modal">
      <div className="login_wrapper">
        <div className="login_auth">

          <button className="close_Lgn" onClick={() => dispatch(closeModal())}>
          <TfiClose className="close_Icn" />
          </button>

          <h2 className="login_title">Log in to Summarist</h2>

          <figure className="loginBtn guest_login">
            <div className="img__wrapper">
            <FaUser className="guest_icon" />
            </div>
            <button className="loginTxt" onClick={handleGuestLogin}>Login as Guest</button>
          </figure>

          <div className="authSep__wrapper">
          <div className="authSeperator"></div>
          <p>or</p>
          <div className="authSeperator"></div>
          </div>

          <figure className="loginBtn google_login">
            <div className="gglBtn">
            <Image className="btnImg" src={"/google.png"} width={15} height={15} alt="google" />
            </div>
            <button className="loginTxt" onClick={handleGoogleLogin}>Login with Google</button>
          </figure>

          <div className="authSep__wrapper">
            <div className="authSeperator"></div>
            <p>or</p>
            <div className="authSeperator"></div>
          </div>

          <input
            className="userInfo_input"
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="userInfo_input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="LoginBtn" onClick={handleLogin}>Login</button>
        </div>

        <div className="restore_acct-wrapper">
        <button className="pwReset" onClick={() => setResetPassword(true)}>Forgot your password?</button>

        <button className="signupBtn" onClick={() => setShowSignUp(true)}>Don&apos;t have an account?</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginModal;
