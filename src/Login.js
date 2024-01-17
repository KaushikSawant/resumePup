import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  //forgot pass will be little complex like sending email etc.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  function openResume() {
    window.open("http://localhost:3000/home", "_self");
  }
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("welcome" + " " + response.data[0].email);
        setTimeout(openResume, 1000);
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <label>
        <b>Username:</b>
      </label>
      <input
        type="text"
        placeholder="Enter Username"
        required
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />

      <label>
        <b>Password:</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />

      <button type="submit" onClick={login}>
        Login
      </button>
      <Link to="/Register">
        {" "}
        <button type="submit">New User?Register Now!</button>
      </Link>
      <h1>{loginStatus}</h1>
    </div>
  );
}
export default Login;
