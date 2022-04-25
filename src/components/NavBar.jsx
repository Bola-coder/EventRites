import React, { useState } from "react";
import style from "./../css/Nav.module.css";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile((prev) => !prev);
  };
  return (
    <nav className={style.nav}>
      <div>
        <Link to="/">
          <h2
            className={style.nav_text}
            onClick={isMobile ? handleMobileMenu : null}>
            EventRites
          </h2>
        </Link>
      </div>
      <div className={style.nav_content}>
        <span className={style.ham} onClick={handleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaHamburger />}
        </span>
        <div className={`${isMobile ? style.mobile : style.nav_links}`}>
          <div onClick={handleMobileMenu}>
            {" "}
            {/*Added so that menu can close once the links are clicked */}
            <Link to="/events">
              <p>Events</p>
            </Link>
            <p>My Schedule</p>
            <p>Login</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
