import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SiMicrosoftazure, SiBitcoin } from "react-icons/si";

function Certifications() {
  return (
    <div className="row justify-content-end">
      <div className="col-12 col-md-8 card bgProject">
        <h3>Certifications:</h3>
        <table className="table">
          <thead>
            <tr>
              <th>
                <SiMicrosoftazure size="2em" />
                Microsoft Azure Fundamentals AZ-900
              </th>
              <a
                href="https://www.youracclaim.com/badges/c4662d66-6cd2-4d78-bdf6-a9c72ea03c1c/public_url"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-1"
              >
                Verify
              </a>
            </tr>
            <tr>
              <th>
                <SiBitcoin size="2em" />
                Introduction to FinTech
              </th>
              <a
                href="https://courses.edx.org/certificates/5e353bedf5754369ab6b598fbd38721a"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-1"
              >
                Verify
              </a>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
export default Certifications;
