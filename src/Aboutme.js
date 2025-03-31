import image from "./Images/myPhoto.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
const React = require("react");

const img = { profile: image };
/*const handleDownload = () => {
    const link = document.createElement('a');
    link.href = img.profile;
    link.download = 'myPhoto.jpg';
    link.click();
  };*/

function Aboutme() {
  return (
    <div className="row">
      <div className="col-12 col-md-4 center">
        <img src={img.profile} className="pic" /><br/>
        Kaushik Sawant
          <br />
          <HiOutlineMail /> kaushiksawant567@gmail.com
          <br />
          <FaPhoneAlt /> +91 9892245473
          <br />
      </div>
      <div className="col-12 col-md-8 card bgProject">
        <h3>About Me:</h3>
        <p>
          A motivated individual with in-depth knowledge of languages and
          development tools, seeking a position in a growth oriented company
          where i can use my skills to the advantage of the companywhile having
          the scope to develop my own skills.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
