import React from 'react'

function ResetPasswordModal() {
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
      
                  <h2 className="login_title">Reset your password</h2>
      
                  <input
                    className="userInfo_input"
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  
                  <button className="resetPwBtn" onClick={handleEmailSignUp}>Send reset password link</button>
                </div>
      
                <div className="restor_acct-wrapper">
                  <button className="signupBtn" onClick={() => setShowLogin(true)}>Go to login</button>
                </div>
              </div>
            </div>
    </>
  )
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
}

export default ResetPasswordModal
