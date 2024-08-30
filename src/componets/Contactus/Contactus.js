import React, { useState } from "react";
import styles from "./contact.module.css";
import { Link } from "react-router-dom";
const Contactus = () => {
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const handlesubmit = async () => {
    // console.log(email, subject, message);
    // const backendurl = process.env.backend_url;
    // const url = `${backendurl}`;
    // console.log(url);

    const response = await fetch(
      "https://mailsender-if1c.onrender.com/email/sendEmail",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      }
    );

    console.log(await response.json());
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>CONTACT ME</h2>
      <div className={styles.box}>
        <div>
          <h2>email - mohitratan2003@gmail.com</h2>
          <h2>contact number - 8144436109</h2>
          <Link to="https://www.linkedin.com/in/mohit-ratan/">
            <h2 className="text-[#0f969c]">Linkedin Profile</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
