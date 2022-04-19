import React from "react";
import style from "./../css/Nav.module.css";
const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <h2 className={style.nav_text}>EventRites</h2>
      </div>
      <div className={style.nav_links}>
        <p>Events</p>
        <p>My Schedule</p>
        <p>Login</p>
      </div>
    </nav>
  );
};

export default NavBar;
