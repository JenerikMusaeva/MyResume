import React from "react";
import styles from "../styles/social.module.css";
import Fade from "react-reveal/Fade"


export default function SocialPage() {
  return (
    <Fade right>

    <div className={styles.social}>
      <ul>
        <li>
          <a target="_blank" href="https://web.whatsapp.com/">
            <i className={styles.whatsapp}></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/">
            <i className={styles.fb}></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/jenerik_lucky/">
          <i className={styles.insta}></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/">
          <i className={styles.linkedin}></i>
          </a>
        </li>
        
      </ul>
    </div>
    </Fade>
  );
}
