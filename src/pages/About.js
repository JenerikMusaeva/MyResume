import React from "react";
import styles from "../styles/about.module.css";

export default function About() {
  
  return (
    <div className={styles.about}>
      <h1>Обо мне</h1>
      <p>Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки модели развития. Не следует, однако забывать, что новая модель организационной деятельности играет важную роль в формировании дальнейших направлений развития.</p>
      <div>
        <p>Возраст {}</p>
        <p>Семейное положение: замужем, 2 детей</p>
        <p>В настоящее время работаю преподавателем</p>
      </div>
      <div className={styles.contacts}>
        <div>Адрес г. Бишкек</div>
        <div>Телефон +996 779 866 133</div>
        <div>E-mail proximity2006@gmail.com</div>
      </div>
    </div>
  );
}
