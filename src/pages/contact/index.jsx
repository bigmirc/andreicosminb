import React from 'react';
import styles from './Contact.module.css';
import Head from 'next/head';
import { useState } from 'react';
const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit  = async (e) =>{
    e.preventDefault()
    try{
      await fetch('http://localhost:3000/api/contact', {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(values)
      })
    }
    catch (err){
        console.log(err);
    }
  }  
return (
    <>
      <Head>
        <title>Cosminachio About</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>CONTACT</div>
          <div className={styles.text}>
            <div>salut@bacosmin.work</div>
            <div>+40 741 956 599</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.text}>
            <div>behance.net/andreibcosmin</div>
            <div>instagram.com/andreicosminb</div>
          </div>
        </div>
        <div className={styles.right}>
          <form method="post" onSubmit={handleSubmit}>
            <label for="name">name</label>
            <input
              type="text"
              value={name}
              id="name"
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <label for="email">email</label>
            <input
              type="text"
              value={email}
              id="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
            <label>Message</label>
            <textarea
              value={message}
              placeholder="message"
              onChange={handleChange}
              name="message"
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
