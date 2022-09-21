import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginDiv}>
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <img className={styles.icon} alt="" src="../67.svg" />
      <img
        className={styles.privacyPolicyRafiki1}
        alt=""
        src="../privacy-policyrafiki-1.svg"
      />
      <img
        className={styles.privacyPolicyRafiki3}
        alt=""
        src="../privacy-policyrafiki-3.svg"
      />
      <div className={styles.privacyPolicyRafiki2}>
        <img
          className={styles.freepikBackgroundCompleteIcon}
          alt=""
          src="../freepikbackgroundcompleteinject33.svg"
        />
        <img
          className={styles.freepikShadowInject33Icon}
          alt=""
          src="../freepikshadowinject33.svg"
        />
        <img
          className={styles.freepikDeviceInject33Icon}
          alt=""
          src="../freepikdeviceinject33.svg"
        />
        <img
          className={styles.freepikDocumentInject33Icon}
          alt=""
          src="../freepikdocumentinject33.svg"
        />
        <img
          className={styles.freepikCharacterInject33Icon}
          alt=""
          src="../freepikcharacterinject33.svg"
        />
        <div className={styles.div}>🎵</div>
      </div>
      <div className={styles.formDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.titleDiv}>
            <b className={styles.logInB}>Log in</b>
          </div>
          <div className={styles.frameDiv1}>
            <img
              className={styles.vuesaxbulkgoogleIcon}
              alt=""
              src="../vuesaxbulkgoogle.svg"
            />
            <div className={styles.loginDiv1}>Log in with Google</div>
          </div>
        </div>
        <div className={styles.frameDiv2}>
          <div className={styles.frameDiv3}>
            <div className={styles.namegmailcomDiv}>name@gmail.com</div>
          </div>
          <div className={styles.frameDiv3}>
            <div className={styles.namegmailcomDiv}>Enter your password</div>
          </div>
          <div className={styles.frameDiv5}>
            <div className={styles.titleDiv}>
              <div className={styles.forgotPasswordDiv}>Forgot Password?</div>
            </div>
            <div className={styles.frameDiv7}>
              <div className={styles.rectangleDiv} />
              <div className={styles.stayLogedinDiv}>stay logedin</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv8}>
          <div className={styles.frameDiv9}>
            <div className={styles.loginDiv1}>Log in</div>
            <img
              className={styles.vuesaxbulkgoogleIcon}
              alt=""
              src="../vuesaxbulkarrowright.svg"
            />
          </div>
          <div className={styles.lineDiv} />
          <div className={styles.frameDiv10}>
            <div className={styles.dontHaveAnAccountYetSig}>
              <span
                className={styles.dontHaveAn}
              >{`don’t have an account yet? `}</span>
              <span className={styles.signUpSpan}>Sign up</span>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.icon1} alt="" src="../57.svg" />
      <img className={styles.icon2} alt="" src="../41.svg" />
    </div>
  );
};

export default Login;
