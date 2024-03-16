import React from "react";
import styles from "../skills/skills.module.css";

import c_icon from "../assests/c_logo.png";
import cpp from "../assests/c++.png";
import python from "../assests/python.png";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import nodejs from "../assests/nodejs.png";
import express from "../assests/express.png";
import mongodb from "../assests/mongodb.png";
import reactlogo from "../assests/react.png";
import bootstrap from "../assests/bootstrap.png";
import tailwindlogo from "../assests/tailwind.png";

const Skills = () => {
  const skillsData = [
    { name: "C", icon: c_icon },
    { name: "C++", icon: cpp },
    { name: "Python", icon: python },
    { name: "Html", icon: html },
    { name: "CSS", icon: css },
    { name: "Javascript", icon: javascript },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Tailwind", icon: tailwindlogo },
    { name: "Nodejs", icon: nodejs },
    { name: "ExpressJS", icon: express },
    { name: "MongoDB", icon: mongodb },
    { name: "ReactJS", icon: reactlogo },
  ];
  return (
    <>
      <div className={styles.box}>
        <h1 className={styles.heading}>SKILLS</h1>
        <div className={styles.container}>
          {skillsData.map((skill) => {
            return (
              <div className={styles.container_items}>
                <img
                  className={styles.container_items_img}
                  src={skill.icon}
                  alt=""
                />{" "}
                <div className={styles.container_items_name}>
                  <p>{skill.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* mobile view */}

      {/* <div className={styles.mobile_box}>
        <div className={styles.data_box}>
          {skillsData.map((skill) => {
            return (
              <div className={styles.container_items}>
                <img
                  className={styles.container_items_img}
                  src={skill.icon}
                  alt=""
                />{" "}
                <div className={styles.container_items_name}>
                  <p>{skill.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.data_box}></div>
        <div className={styles.data_box}></div>
      </div> */}
    </>
  );
};

export default Skills;
