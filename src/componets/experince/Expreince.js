import React from "react";
import bm from "./buildingminds_technologies_logo.jpg";
const Expreince = () => {
  return (

    <div className="flex flex-col  items-center">
        <p className="text-[#0f969c] text-lg">EXPERIENCE</p>
        <div
          className="flex justify-center items-center gap-4"
          style={{
            padding: "30px",
            borderRadius: "15px",
            backgroundColor: "#030F12",
            margin: "3rem",
            border: "1px solid #0f969c",
            boxShadow: "-0px -0px 15px #0f969c",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          <div>
            <img src={bm} alt="logo" />
          </div>
          <div
            className="flex flex-col gap-4 items-start"
            style={{
              color: "#0f969c",
            }}
          >
            <p className="text-lg">Building Minds Technology - Sep 2024 - Present</p>
            <p>Full Stack WebDeveloper</p>
          </div>
        </div>
    </div>
  );
};

export default Expreince;
