import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useIsMobile from '../hooks/useIsMobile';

export function Home() {
  const { isMobile } = useIsMobile();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={isMobile ? styles.containerMobile : styles.container}>
        <div className={styles.andrei}>Andrei</div>
        <div className={isMobile ? styles.cosminMobile : styles.cosmin}>
          Cosmin
        </div>
        <div className={isMobile ? styles.balaMobile : styles.bala}>Bălă</div>
        <div className={isMobile ? styles.graphicMobile : styles.graphic}>
          Graphic
        </div>
        <div className={isMobile ? styles.designerMobile : styles.designer}>
          Designer
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
