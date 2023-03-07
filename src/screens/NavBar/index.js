import React from "react";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#home">
            Home
          </a>
          <a className="navbar-item" href="#me">
            About Me
          </a>
          <a className="navbar-item" href="#edu">
            Education
          </a>
          <a className="navbar-item" href="#awar">
            Awards &amp; Certification
          </a>
          <a className="navbar-item" href="#get">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
