import Image from "next/image";
import "@/styles/SignUp.css";
import LoginModal from "./LoginModal";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/loginModal";
import { googleSignUp, emailSignUp } from "@/firebase/firebase";


const SignUpModal = () => {

    const dispatch = useDispatch();
    const [showLogin, setShowLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleGoogleSignUp = async () => {
      const ok = await googleSignUp()
      if (ok) dispatch(closeModal())
    }

    const handleEmailSignUp = async () => {
      const ok = await emailSignUp('', email, password)
      if (ok) dispatch(closeModal())
    }
    

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
              <FaXmark className="close_Icn" />
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
              <button className="loginTxt" onClick={handleGoogleSignUp}>Sign Up with Google</button>
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
            />

            <button className="LoginBtn" onClick={handleEmailSignUp}>Sign Up</button>
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
