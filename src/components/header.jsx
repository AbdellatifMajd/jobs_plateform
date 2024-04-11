import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const Header = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="logo-no-background-green.png" alt="JOB'S" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/job-list">Job List</Link>
            </li>
            <li>
              <a href="">
                <Link to="/company-reviews">Company-reviews</Link>
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <Link to={"sign-in"}>Sign in</Link>
            </li>
            <li>
              <Link to={"login"}>Login</Link>
            </li>
          </ul>
        </nav>
        <div className="dark_mode">
          <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode-toggle"
            onChange={toggleTheme}
          />
          <label className="dark_mode_label" for="darkmode-toggle">
            <Sun />
            <Moon />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
