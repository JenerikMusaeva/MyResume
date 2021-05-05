import React from "react";
import MyWorks from "../components/MyWorks"
import '../Style.css'


export default function Portfolio() {
  return (
    <div className="pages">
      <h1>Portfolio</h1>
      <MyWorks />
      <p>Description</p>
      <a href="#">Link to work</a>
    </div>
  );
}
