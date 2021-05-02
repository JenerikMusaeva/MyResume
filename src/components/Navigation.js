import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navigation.module.css"

 export default function Sidebar() {
  return (
    <div className={styles.navigation}>
      <ul >
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contactme">Contact me</Link>
        </li>
      </ul>
    </div>
  );
}
