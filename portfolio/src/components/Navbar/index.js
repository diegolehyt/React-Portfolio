import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  navB: {
    fontFamily: "'Trade Winds', cursive"
  },
  imgB: {
    marginRight: "10px"
  }
}

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html" style={styles.navB}><img src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/logo.png" width="40px" height="40px" tabindex="-1" style={styles.imgB} alt="logo"/>Diego Lehyt</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav mr-auto smooth-scroll">
            <li className="nav-item">
              <a className="nav-link" href="about.html" data-offset="90">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html" data-offset="90">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html" data-offset="90">Contact</a>
            </li>
          </ul>

          {/* <!-- Social Icon  --> */}
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/diego-lehyt-1616b11a6/">
                <i className="fab fa-linkedin-in light-green-text-2"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/diegolehyt">
                <i className="fab fa-github light-green-text-2"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.docdroid.net/4B2tXwf/diegoresume-pdf">
                <i className="far fa-address-card light-green-text-2"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/diego.lehyt/?hl=es">
                <i className="fab fa-instagram light-green-text-2"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/Diego.Lehyt">
                <i className="fab fa-facebook-f light-green-text-2"></i>
              </a>
            </li>
          </ul>

        </div>

      </div>
    </nav>

  );
}

export default Navbar;
