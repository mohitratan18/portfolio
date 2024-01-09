import React from "react";
import styles from "../Certificates/certificates.module.css";
const Certificates = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.main_box}>
        {projectsdata.map((project) => {
          return (
            <div className={styles.container}>
              <img className={styles.img} src={project.img} alt="" />
              <div className={styles.info}>{project.info}</div>
              <div className={styles.btn}>
                <a
                  href={project.btn}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Git Repo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
