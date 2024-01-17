//import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FcSportsMode } from "react-icons/fc";
import React, { useState, useEffect } from "react";

function Hobbies() {
  const [city, setCity] = useState(null);
  const [search] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://localhost:8000/elements`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.sports[0].sport1);
      //change variable name to sports or games for setCIt ad city
    };

    fetchApi();
  }, [search]);

  return (
    <div className="row justify-content-end">
      <div className="col-12 col-md-8 card bgProject">
        <div>
          <h3>Interests:</h3>
          <p className="api">
            <FcSportsMode size="2em" />I love playing Football and Basketball
            {city}.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
