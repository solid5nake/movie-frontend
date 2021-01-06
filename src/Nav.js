import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <ul className="nav_links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="./Series">
          <li>Series</li>
        </Link>
        <Link to="./Films">
          <li>Films</li>
        </Link>
        <Link to="./Nieuw">
          <li>Nieuw en Populair</li>
        </Link>
        <Link to="./Lijst">
          <li>Mijn lijst</li>
        </Link>
        <Link to="./Kijk">
          <li>Kijk opnieuw</li>
        </Link>
      </ul>

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}
export default Nav;
