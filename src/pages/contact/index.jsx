import React, { useRef } from 'react';
import styles from './Contact.module.css';
import Head from 'next/head';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';
import useIsMobile from '../../hooks/useIsMobile';

const Contact = () => {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_8ukg5ph',
        'cosminacho',
        form.current,
        'ugkh4Czr8yXrX1yqr'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { isMobile } = useIsMobile();

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={isMobile ? styles.titleMobile : styles.title}>
        CONTACT
      </div>
      <div className={isMobile ? styles.containerMobile : styles.container}>
        <div
          className={
            isMobile ? styles.textContainerMobile : styles.textContainer
          }
        >
          <div className={isMobile ? styles.leftMobile : styles.left}>
            <div className={isMobile ? styles.textMobile : styles.text}>
              <div>
                <a
                  href="https://www.behance.net/andreibcosmin"
                  target="_blank"
                  className={
                    isMobile ? styles.buttonStyleMobile : styles.buttonStyle
                  }
                  rel="noreferrer"
                >
                  BEHANCE
                </a>
              </div>
            </div>
            <div
              className={isMobile ? styles.dividerMobile : styles.divider}
            ></div>
            <div className={isMobile ? styles.textMobile : styles.text}>
                <a
                  href="https://www.instagram.com/andreicosminb"
                  target="_blank"
                  className={
                    isMobile ? styles.buttonStyleMobile : styles.buttonStyle
                  }
                  rel="noreferrer"
                >
                  INSTAGRAM
                </a>
            </div>
          </div>
          <div className={isMobile ? styles.rightMobile : styles.right}>
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.inputWrapper}>
                <label for="name">Name</label>
                <input
                  className={styles.input}
                  placeholder="name"
                  type="text"
                  name="user_name"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label for="email">Email</label>
                <input
                  className={styles.input}
                  placeholder="email"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className={styles.textareaWrapper}>
                <label>Cute Message</label>
                <textarea name="message" placeholder="message" />
              </div>
              <div className={styles.button}>
                {/* <button className={styles.buttonStyle}>Send</button> */}
                <input
                  className={styles.buttonStyle}
                  type="submit"
                  value="Send"
                />
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
