import React, { useState } from "react";
import styles from "./contact.module.css";
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
        <h1>Email Me 📧</h1>
        <input
          type="text"
          placeholder="Your Email"
          className={styles.input}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input
          type="text"
          placeholder="Subject"
          className={styles.input}
          onChange={(e) => {
            setsubject(e.target.value);
          }}
        />
        <textarea
          className={styles.textbox}
          col={60}
          placeholder="Message"
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        ></textarea>
        <button className={styles.button} onClick={handlesubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contactus;
