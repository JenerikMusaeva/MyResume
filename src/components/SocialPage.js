import React from "react";
import styles from "../styles/social.module.css";
import Fade from "react-reveal/Fade"


export default function SocialPage() {
  return (
    <Fade right>

    <div className={styles.social}>
      <ul>
        <li>
          <a target="_blank" href="https://wa.me/+996779866133">
            <i className={styles.whatsapp}></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/jenerik.lucky/">
            <i className={styles.fb}></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/jenerik_lucky/">
          <i className={styles.insta}></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/%D0%B6%D0%B0%D0%BD%D0%B0%D1%80%D0%B0-%D0%BC%D1%83%D1%81%D0%B0%D0%B5%D0%B2%D0%B0-6473021b3/">
          <i className={styles.linkedin}></i>
          </a>
        </li>
        
      </ul>
    </div>
    </Fade>
  );
}
