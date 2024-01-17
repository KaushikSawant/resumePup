import React from "react";
import { AiOutlineLaptop } from "react-icons/ai";
import { FcElectronics, FcElectricity } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <div className="row justify-content-end">
        <div className="col-12 col-md-4 center">
          Kaushik Sawant
          <br />
          <HiOutlineMail /> kaushiksawant567@gmail.com
          <br />
          <FaPhoneAlt /> +91 9892245473
          <br />
        </div>

        <div className="col-12 col-md-8 card bgProject">
          <h3>Education Details:</h3>
          <p>
            <AiOutlineLaptop size="2em" />
            Post Graduation Diploma in Advanced Computing from CDAC Kharghar{" "}
            {`(2021)`}.
          </p>
          Marks: 68%
          <br />
          <hr />
          <p>
            <FcElectronics size="2em" />
            B.E Electronics from Vidyalankar institute of technology, Mumbai{" "}
            {`(2019)`}.
          </p>
          Marks: 6.01 CGPI
          <br />
          <hr />
          <p>
            <FcElectricity size="2em" />
            Diploma in Electonics and Video Engineering from Vivekand Education
            Society's Polytechnic[MSBTE].
          </p>
          Marks: 58%
          <br />
        </div>
      </div>
    </div>
  );
};

export default Education;
