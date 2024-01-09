import React from "react";
import styles from "./Education.module.css";
import vignan from "../assests/vignan.png";
const Education = () => {
  return (
    <div className={styles.container}>
      <h1>EDUCATION</h1>

      <div className={styles.box}>
        <img src={vignan} className={styles.img} alt="" />
        <h2 className={styles.title}>
          Vignan's Institute of Information Technology, Visakhapatnam
        </h2>
        <h5 className={styles.subtitle}>
          Bachelor of Technology - BTech, Computer Science and Engineering
        </h5>
        <p className={styles.year}>2021 - 2025</p>
        <span>
          <div className={styles.grade}>
            <b>Grade:</b> 8.7CGPA
          </div>
        </span>
      </div>
    </div>
  );
};

export default Education;
