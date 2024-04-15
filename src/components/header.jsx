import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Sun } from "./DarkMode/Sun.svg";
import { ReactComponent as Moon } from "./DarkMode/Moon.svg";
import "./DarkMode/DarkMode.css";

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

  const location = useLocation();
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="logo-no-background-green.png" alt="JOB'S" />
        </div>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" ? "active" : ""}`}
              >
                <i className="fas fa-home"></i>Acceuil
              </Link>
            </li>
            <li>
              <Link
                to="/job-list"
                className={`${
                  location.pathname === "/job-list" ? "active" : ""
                }`}
              >
                <i className="fas fa-list"></i>Liste des offres
              </Link>
            </li>
            <li>
              <Link
                to="/company-reviews"
                className={`${
                  location.pathname === "/company-reviews" ? "active" : ""
                }`}
              >
                {" "}
                <i className="fas fa-star-half-alt"></i> Avis sur les
                entreprises
              </Link>
            </li>
          </ul>
        </nav>

        <div className="sign">
          <ul>
            <li>
              <Link
                to={"sign-in"}
                className={`${
                  location.pathname === "/sign-in" ? "active" : ""
                }`}
              >
                {" "}
                <i class="fas fa-user "></i>
                Créer un compte
              </Link>
            </li>
          </ul>

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
      </div>
    </header>
  );
};

export default Header;
