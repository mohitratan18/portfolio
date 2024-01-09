import React from 'react'
import styles from './contact.module.css'
const Contactus = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>CONTACT ME</h2>
      <div className={styles.box}>
        <h1>Email Me 📧</h1>
        <input type='text' placeholder='Your Email' className={styles.input}/>
        <input type='text' placeholder='Your Name' className={styles.input}/>
        <input type='text' placeholder='Subject' className={styles.input}/>
        <textarea className={styles.textbox} col={60} placeholder='Message' ></textarea>
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  )
}

export default Contactus
