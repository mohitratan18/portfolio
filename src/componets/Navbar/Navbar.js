import { React, useState } from "react";
import styles from "./navbar.module.css";
import menu from "../assests/menu.png";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const handleclick = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>Home</div>
        <div className={styles.items}>About</div>
        <div className={styles.items}>Contact</div>
        <div className={styles.items}>
          <a
            href="https://drive.google.com/file/d/16j6PqrknaG_fzZ01xU72HD2YrzAa4ChB/view"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className={styles.pcontainer}>
        <div className={styles.menu} onClick={handleclick}>
          <img src={menu} alt="" className={styles.menuimg} />
        </div>
        <div
          className={styles.mobilecontainer}
          style={{
            display: toggle ? "flex" : "none",
          }}
        >
          <div className={styles.item}>Home</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>Contact</div>
          <div className={styles.item}>
            <a
              href="https://drive.google.com/file/d/16j6PqrknaG_fzZ01xU72HD2YrzAa4ChB/view"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
