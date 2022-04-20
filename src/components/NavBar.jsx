import React, { useState } from "react";
import style from "./../css/Nav.module.css";
import { FaHamburger, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile((prev) => !prev);
  };
  return (
    <nav className={style.nav}>
      <div>
        <h2 className={style.nav_text}>EventRites</h2>
      </div>
      <div className={style.nav_content}>
        <span className={style.ham} onClick={handleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaHamburger />}
        </span>
        <div className={`${isMobile ? style.mobile : style.nav_links}`}>
          <div>
            {/* To style mobile menu */}
            <p>Events</p>
            <p>My Schedule</p>
            <p>Login</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
