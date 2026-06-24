import { useState } from "react";
import { resetPassword } from "@/firebase/firebase";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/loginModal";
import { FaXmark } from "react-icons/fa6";
import LoginModal from "./LoginModal";
import "@/styles/ResetPassword.css";

function ResetPasswordModal() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const resetPw = async () => {
   const ok = await resetPassword(email)
   if (ok) {
    setShowLogin(true)
   }
  };

  if (showLogin) {
    return <LoginModal />;
  }

  return (
    <>
      <div className="outer_modal">
        <div className="resetPw_wrapper">
          <div className="login_auth">
            <button
              className="close_Lgn"
              onClick={() => dispatch(closeModal())}
            >
              <FaXmark className="close_Icn" />
            </button>

            <h2 className="login_title">Reset your password</h2>

            <input
              className="userInfo_input"
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="resetPwBtn" onClick={resetPw}>
              Send reset password link
            </button>
          </div>

          <div className="restore_acct-wrapper">
            <button className="signupBtn" onClick={() => setShowLogin(true)}>
              Go to login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordModal;
