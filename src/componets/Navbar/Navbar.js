import { React, useState } from "react";
import styles from "./navbar.module.css";
import menu from "../assests/menu.png";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const handleclick = () => {
    console.log("rohit waste");
    settoggle(!toggle);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>Home</div>
        <div className={styles.items}>
          <a
            href="#skills"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Skills
          </a>
        </div>
        <div className={styles.items}>
          <a
            href="#projects"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Projects
          </a>
        </div>
        <div className={styles.items}>
          <a
            href="#contact"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Contact
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
          <div className={styles.item} onClick={handleclick}>
            Home
          </div>
          <div className={styles.item} onClick={handleclick}>
            <a
              href="#skills"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Skills
            </a>
          </div>
          <div className={styles.item} onClick={handleclick}>
            <a
              href="#projects"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Projects
            </a>
          </div>
          <div className={styles.item} onClick={handleclick}>
            <a
              href="#contact"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
