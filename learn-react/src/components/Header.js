import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo-box">
          <span className="logo-box__text">tolu-c</span>
        </div>
        <ul className="menu">
          <li className="menu__list active">
            <a href="/" className="menu__list__link">
              Home
            </a>
          </li>
          <li className="menu__list">
            <a href="/" className="menu__list__link">
              About
            </a>
          </li>
          <li className="menu__list">
            <a href="/" className="menu__list__link">
              Contact
            </a>
          </li>
          <li className="menu__list">
            <a href="/" className="menu__list__link">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
