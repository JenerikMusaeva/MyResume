import React from "react";
import styles from "../styles/resume.module.css";
import "../Style.css";

export default function Resume() {
  return (
    <div className="pages">
      <h1>Resume</h1>

      <div className={styles.resume}>
        <div className={styles.education}>
          <div className={styles.courses}>
            <h3>Курсы</h3>
            <p>
              IT-academy <span>Frontend - разработчик (2021 г)</span>
            </p>
            <p>
              IT-academy <span>HTML / CSS (2020 г)</span>
            </p>
            <p>
              LOGOS <span>Компьютерная графика (2009 г)</span>
            </p>
          </div>
          <div className={styles.university}>
            <h3>Высшее</h3>
            <p>Кыргызский Национальный Университет им. Ж. Баласагына</p>
            <p>Факультет "Математики, Информатики и Кибернетики"</p>
            <p>Окончила в 2011 г.</p>
          </div>
        </div>

        <div>
        <div className={styles.skills}>
          <h3>Навыки</h3>
          <p>HTML/CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Photoshop</p>
          <p>Corel Draw</p>
        </div>

        <div className="languages">
          <h3>Знание языков</h3>
          <p>Русский язык</p>
          <p>Английский язык(со словарем)</p>
        </div>
        </div>
      </div>
    </div>
  );
}
