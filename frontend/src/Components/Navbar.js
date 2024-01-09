import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.nav_team_name}>
          <h1>Logo</h1>
        </div>
        <div className={styles.nav_ul_div}>
          <ul>
            <li>
              <a href="/">Skincare Routine</a>
            </li>
            <li>
              <a href="/">Nearby Dermatologists</a>
            </li>
            <li>
              <a href="/">Donate</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
