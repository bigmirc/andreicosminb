import React from 'react';
import Head from 'next/head';
import styles from './About.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import useIsMobile from '../../hooks/useIsMobile';

const About = () => {
  const { isMobile } = useIsMobile();
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.container}>
        <div className={isMobile ? styles.titleMobile : styles.title}>
          ABOUT
        </div>
        <div className={isMobile ? styles.wrapperMobile : styles.wrapper}>
          <div className={isMobile ?  styles.pwrapperMobile: styles.pwrapper}>
            <div className={styles.p}>
            Hello! My name is Cosmin and I am a graphic designer based in Bucharest, Romania. I studied Graphic Design at National University of Arts in Bucharest and I currently work a full time job as a designer at Ivatherm. Before that I was a freelancer for a year.
            </div>
            <div className={styles.p}>
            I am specialized in type design, branding, user interface design and editorial design.
            </div>
          </div>
          <div
            className={isMobile ? styles.cosminachoMobile : styles.cosminacho}
          >
            <Image
              src={'/images/cosminacho.svg'}
              width="600px"
              height="600px"
              layout="responsive"
              alt="cosminacho"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(About), {
  ssr: false,
});
