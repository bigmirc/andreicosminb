import React from 'react';
import styles from './Contact.module.css';
import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import useIsMobile from '../../hooks/useIsMobile';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { isMobile } = useIsMobile();

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.container}>
        <div className={isMobile ? styles.titleMobile : styles.title}>CONTACT</div>
        <div className={isMobile ?  styles.textContainerMobile : styles.textContainer}>
          <div className={isMobile ? styles.leftMobile: styles.left}>
            <div className={isMobile ? styles.textMobile : styles.text}>
              <div><a href="">salut@bacosmin.work</a></div>
              <div><a href="">+40 741 956 599</a></div>
            </div>
            <div className={isMobile ? styles.dividerMobile : styles.divider}></div>
            <div className={isMobile ? styles.textMobile : styles.text}>
              <div><a href="">behance.net/andreibcosmin</a></div>
              <div><a href="">instagram.com/andreicosminb</a></div>
            </div>
          </div>
          <div className={isMobile ? styles.rightMobile : styles.right}>
            <form method="post" onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <label for="name">Name</label>
                <input
                  className={styles.input}
                  type="text"
                  value={name}
                  id="name"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label for="email">Email</label>
                <input
                  className={styles.input}
                  type="text"
                  value={email}
                  id="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.textareaWrapper}>
                <label>Cute Message</label>
                <textarea
                  value={message}
                  onChange={handleChange}
                  name="message"
                />
              </div>
              <div className={styles.button}>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), {
  ssr: false,
});
