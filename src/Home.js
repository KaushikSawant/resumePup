import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Aboutme from "./Aboutme";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Project from "./Project";
import Hobbies from "./Hobbies";

function Home() {
  return (
    <div className="container mt-4 mb-5 bgAbout">
      <Aboutme />
      <Skills />
      <Project />
      <Certifications />
      <Education />
      <Hobbies />
    </div>
  );
}

export default Home;
