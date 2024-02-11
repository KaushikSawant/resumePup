import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaJava, FaDatabase, FaNodeJs, FaJenkins } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
//import {SiPostman} from "react-icons/si"
import { BsGit } from "react-icons/bs";
import { SiJavascript, SiSonarqube, SiPostman } from "react-icons/si";
import { Link } from "react-router-dom";
import { SiPuppeteer } from "react-icons/si";

function Skills() {
  return (
    <div className="row justify-content-end">
      <div className="col-12 col-md-8 bgProject">
        <h3>Technical Skills:</h3>
        <table className="table">
          <thead>
            <tr>
              <th>
                <FaJava size="1.5em" color="rgb(250,123,23)" />
                Java
              </th>
              <th>
                <GrReactjs size="1.5em" color="blue" /> Basic React.js
              </th>
              <th>
                <SiJavascript size="1.5em" />
                JavaScript
              </th>
              <th>
                <FaNodeJs size="1.2em" color="green" />
                Nodejs
              </th>
              <th>
                <FaDatabase size="1.2em" color="#0074a3" />
                MySQL
              </th>
              <th>
                <Link to="/Api">API</Link>
              </th>
              <br />
            </tr>
            <tr>
              <th>
                <BsGit size="2em" color="rgb(250,123,23)" />
                Git
              </th>
              <th>
                <SiPostman size="2em" color="#ff6c37" />
                Postman
              </th>
              <th>
                <SiSonarqube size="1.8em" color="#087ea4" />
                Sonar
              </th>
              <th>
                <SiPuppeteer size="2em" color="#0074a3" />
                Puppeteer
              </th>
              <th>
                <FaJenkins size="2em" />
                Jenkins
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Skills;
