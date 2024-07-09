import React from "react";
import "./LoginPage.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import Section from "../Section";
import Home from "../Pages/Home";

export default function LoginPage() {
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  function handleChange(event, id) {
    if (id == "pass") {
      setPass(event.target.value);
    } else {
      setUser(event.target.value);
    }
  }

  function handleSubmit() {
    if (user == "chinmay" && pass == "1234") {
      setAuthenticated(true);
    }
    console.log(user);
  }
  return (
    <>
      <div>{authenticated && <Home />}</div>
      <div className="mainwrapper">
        {!authenticated && (
          <Section topXl={80}>
            <div className="wrapper">
              <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Username"
                    value={user}
                    id="user"
                    onChange={(e) => handleChange(e, "user")}
                    required
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Password"
                    value={pass}
                    id="pass"
                    onChange={(e) => handleChange(e, "pass")}
                    required
                  />
                  <FaLock className="icon" />
                </div>
                <div className="remember-forget">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                  <p>
                    Don't have an account? <a href="#">Register</a>
                  </p>
                </div>
              </form>
            </div>
          </Section>
        )}
      </div>
    </>
  );
}
