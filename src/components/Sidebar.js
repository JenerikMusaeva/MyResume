import React from "react";
import styles from "../styles/sidebar.module.css";
import { Fade, Flip } from "react-reveal";

export default function Sidebar() {
  return (
    <Fade left>
      <div className={styles.sidebar}>
        <Flip top duration={3000}>
          <div className={styles.photo}></div>
        </Flip>
        <h1>Мусаева Жанара</h1>
        <h2>В начале пути FRONTEND разработчика</h2>
        <Flip bottom duration={3000}>
          <div className={styles.downloadCV}>Скачать резюме</div>
        </Flip>
      </div>
    </Fade>
  );
}
