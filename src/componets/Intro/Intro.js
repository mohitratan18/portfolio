import React from "react";
import styles from "../Intro/intro.module.css";
import myphoto from "../assests/myphoto.jpeg";
const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgdiv}>
        <img className={styles.img} src={myphoto} alt="" />
      </div>
      <span className={styles.name}>Hi, I'm Mohit Ratan 👋</span>

      <div className={styles.intromatter}>
        <span className={styles.span1}>
          <h1 className={styles.fwd}>FullStack Web Developer</h1>
        </span>
        <div className={styles.div2}>
          <p>
            Hi, I'm Mohit Ratan, a skilled full-stack web developer proficient
            in the MERN stack. I specialize in solving intricate DSA problems,
            leveraging my adaptive nature and robust problem-solving skills. My
            passion lies in crafting efficient web applications, utilizing the
            latest technologies. Ready to tackle challenges and explore new
            frontiers in tech!
          </p>
        </div>
      </div>
      <div className={styles.button_box}>
        <button className={styles.button}>
          <a
            href="https://drive.google.com/file/d/1EDSu8RSDzDG3wwdmf_xWJTR5A0mCmGJQ/view?usp=drive_link"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Intro;
