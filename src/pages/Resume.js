import React from "react";
import Education from '../components/Education'
import Skills from '../components/Skills'
import Languages from '../components/Languages'
import '../Style.css'


export default function Resume() {
  return (
    <div className="pages">
      <h1>Resume</h1>
      <Education />
      <Skills />
      <Languages />

    </div>
  );
}
