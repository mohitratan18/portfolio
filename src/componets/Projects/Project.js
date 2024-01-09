import React from "react";
import styles from "../Projects/projects.module.css";
import textutils from "../assests/text-utils.png";
import inotebook from "../assests/Inotebook.png";
import hope from "../assests/hope.png";
import portfolio from "../assests/portfolio.png";
const Project = () => {
  const projectsdata = [
    {
      img: inotebook,
      info: "INoteBook: a secure, React-based app for personalized note-taking, prioritizing user privacy and confidentiality. Enables creation, storage, and access to notes.",
      btn: "https://github.com/mohitratan18/INOTE-BOOK",
    },
    {
      img: portfolio,
      info: "Designed with ReactJS, my personal portfolio elegantly presents my skills and passions, offering an interactive showcase of my journey in web development.",
      btn: "https://github.com/mohitratan18/portfolio",
    },
    {
      img: textutils,
      info: "TextUtils: an all-in-one online text tool providing diverse formatting, analysis, and transformation options for seamless text editing.",
      btn: "https://github.com/mohitratan18/text-utils",
    },
    {
      img: hope,
      info: "HOPE A web platform linking food donors to recipients, streamlining surplus food donation for efficient and transparent distribution to those in need.",
      btn: "",
    },
  ];
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
                  Github Repo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
