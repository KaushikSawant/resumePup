import React from "react";
import maIcon from "./Images/ma.png";
const img = { ma: maIcon };
function Project() {
  return (
    <div className="row justify-content-end">
      <div className="col-12 col-md-8 card bgProject">
        <div className="card-body">
          <h3>Work Experience</h3>
          <h4>
            Finicity a Mastercard Company{" "}
            <img src={img.ma} className="mastercard" />
          </h4>
          <p>
            As a Software Engineer, I played a pivotal role in the Open Banking
            division, where my responsibilities included writing highly
            efficient code using Puppeteer, JavaScript, and Typescript. My
            primary role is to leverage the Puppeteer framework to automate
            browser actions. Additionally, I played a pivotal role in
            maintaining the overall repository health by resolving SonarQube
            issues, addressing code complexities, and implementing best
            practices. My responsibilities also extended to upgrading Puppeteer
            and TypeScript versions, necessitating code modifications to align
            with the latest updates.
          </p>
        </div>
        <div className="card-body">
          <h4>
            Ugam Solutions a Merkle Company
            <img
              src={`https://www.ugamsolutions.com/Content/images/logo.png`}
              className="mastercard"
            />
          </h4>
          <p>
            Working as AEM(Adobe Experience Manager) Developer, My day to day
            responsibilites were creating User Interface, Components and Models
            with HTML, CSS, and JavaScript to create visually appealing and
            interactive Web Applications. And testing the product before
            deploying it to Production environment
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
