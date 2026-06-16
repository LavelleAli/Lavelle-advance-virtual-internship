import { useState } from "react";
import "../styles/SignUp.css";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/loginModal";
import LoginModal from "./LoginModal";


const SignUpModal = () => {

    const dispatch = useDispatch();

    const [showLogin, setShowLogin] = useState(false)

    if (showLogin) {
        return <LoginModal />
    }


  return (
    <>
      <div className="outer_modal">
        <div className="signUp_wrapper">
          <div className="login_auth">
            <button
              className="close_Lgn"
              onClick={() => dispatch(closeModal())}
            >
              <TfiClose className="close_Icn" />
            </button>

            <h2 className="login_title">Sign up to Summarist</h2>

            <figure className="loginBtn google_login">
              <div className="gglBtn">
                <Image
                  className="btnImg"
                  src={"/google.png"}
                  width={15}
                  height={15}
                  alt="google"
                />
              </div>
              <div className="loginTxt">Sign Up with Google</div>
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
            />
            <input
              className="userInfo_input"
              type="password"
              placeholder="Password"
            />

            <button className="LoginBtn">Sign Up</button>
          </div>

          <div className="restor_acct-wrapper">
            <button className="signupBtn" onClick={() => setShowLogin(true)}>Already have an account?</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
