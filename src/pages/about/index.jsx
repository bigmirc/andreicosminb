import React from 'react';
import Head from 'next/head';
import styles from './About.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Head>
        <title>Cosminachio About</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>ABOUT</div>
        <div className={styles.wrapper}>
          <div className={styles.pwrapper}>
            <div className={styles.p}>
              Hello! My name is Cosmin and I am a curious graphic designer based
              in Bucharest, Romania. I studied Graphic Design at National
              University of Arts in Bucharest and I currently work a full time
              job as a designer at Ivatherm. Before that I was a freelancer for
              a almost a year.
            </div>
            <div className={styles.p}>
              I am interested in type design, branding, user interface design
              and editorial design.
            </div>
          </div>
          <div className={styles.cosminacho}>
            <Image
              src={'/images/cosmin.jpeg'}
              width="300px"
              height="300px"
              layout="responsive"
              alt="cosminacho"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
