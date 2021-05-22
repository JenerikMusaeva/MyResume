import React from "react";
import styles from "../styles/about.module.css";
import '../Style.css'

export default function About() {
  let nowAge = () => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let dob = new Date(1988, 11, 3);
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    let age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
      age = age - 1;
    }
    return age;
  };

  return (
    <>
      <div className={`pages ${styles.about}`}>
        <p className={styles.description}>
          <h1>Обо <span>мне</span></h1>
        
          <p>Привет! Меня зовут Жанара! Я родилась и живу в столице Солнечного Кыргызстана, Бишкек. Окончила школу и университет в Бишкеке. На данный момент обучаюсь в IT - academy на Frontend - разработчика. Замужем, есть двое маленьких детей. На данный момент работаю преподавателем по графическим программам. </p>
        </p>
        <div className={styles.rightside}>
        <div className={styles.info}>
          <p>Возраст: <span>{nowAge()}</span></p>
          <p>Семейное положение:<span> замужем, 2 детей</span></p> 
          <p>В настоящее время работаю преподавателем</p>
        </div>
        <div className={styles.contacts}>
        <p>Адрес:<span> г. Бишкек</span></p> 
        <p>Телефон:<span> <a href="tel:+996779866133">+996 779 866 133</a></span></p> 
        <p>E-mail: <span><a href="mailto:proximity2006@gmail.com">proximity2006@gmail.com</a> </span></p> 
        </div>
          </div>
      </div>
    </>
  );
}
