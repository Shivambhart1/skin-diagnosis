import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add a resize listener to update the mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.nav_team_name}>
          <a href="/">
            <h1>FINALYEAR</h1>
          </a>
        </div>

        {isMobile ? (
          <>
            <MenuIcon
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
              fontSize="large"
            />
            <div
              className={`${styles.mobile_nav} ${isOpen ? styles.open : ""}`}
            >
              <a href="/skin-care">Skincare Routine</a>
              <a href="/">Nearby Dermatologists</a>
            </div>
          </>
        ) : (
          <div className={styles.nav_links}>
            <a href="/skin-care">Skincare Routine</a>
            <a href="/">Nearby Dermatologists</a>
          </div>
        )}
      </div>
    </main>
  );
}
