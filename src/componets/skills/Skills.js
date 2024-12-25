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
import nextjs from "../assests/nextjs-icon.png";
import firbase from "../assests/firebasae_icon.png";
import reactnative from "../assests/react_native.png";

const Skills = () => {
  const skillsData = [
    { name: "ReactJS", icon: reactlogo },
    {name:"ReactNative"  ,icon:reactnative},
    {name:"NextJS" ,icon:nextjs},
    {name:"Firebase" ,icon:firbase},
    { name: "Html", icon: html },
    { name: "CSS", icon: css },
    { name: "Javascript", icon: javascript },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Tailwind", icon: tailwindlogo },
    { name: "Nodejs", icon: nodejs },
    { name: "ExpressJS", icon: express },
    { name: "MongoDB", icon: mongodb },
    { name: "C", icon: c_icon },
    { name: "C++", icon: cpp },
    { name: "Python", icon: python },
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
