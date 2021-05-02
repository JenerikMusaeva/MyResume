import React from "react";
import MyPhoto from '../images/IMG_20200927_165704.jpg'
import SocialPage from '../components/SocialPage'
import styles from "../styles/sidebar.module.css"


 export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.photo} >
      </div>
      <h1>Мусаева Жанара</h1>
      <h2>В начале пути FRONTEND разработчика</h2>
      <div className={styles.downloadCV}>Скачать резюме</div>
      
    </div>
  );
}
