import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import projects from '../../utils/projects';
import styles from './work.module.css';
import Carousel from 'react-simply-carousel';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';

const WorkDetail = () => {
  const router = useRouter();
  const { isMobile } = useIsMobile();
  const { id } = router.query;
  const [project, setProject] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!id) {
      return;
    }
    setProject(projects[+id]);
  }, [id]);
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className={styles.projectContainer}>
        <Image
          src={`/images/${project.name}/cover.jpg`}
          layout="responsive"
          alt={project.name}
          width={1740}
          height={980}
        ></Image>
        <div className={styles.projectDetailContainer}>
          <div className={isMobile ? styles.topMobile : styles.top}>
            <p className={styles.projectName}>{project?.name}</p>
            <p
              className={
                isMobile ? styles.descriptionMobile : styles.description
              }
            >
              {project?.description}
            </p>
          </div>
          <div className={isMobile ? styles.bottomMobile : styles.bottom}>
            <div className={styles.detailBox}>
              <p className={styles.detailBoxTitle}>Area</p>
              <p>{project?.type}</p>
            </div>
            <div className={styles.detailBox}>
              <p className={styles.detailBoxTitle}>Year of production</p>
              <p>{project?.year}</p>
            </div>
            <div className={styles.detailBox}>
              <p className={styles.detailBoxTitle}>Kind</p>
              <p>{project?.kind}</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Carousel
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-around',
            userSelect: 'text',
          },
        }}
        activeSlideIndex={activeSlide}
        // activeSlideProps={{
        //   style: {
        //     background: 'blue',
        //   },
        // }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: '>',
          style: {
            backgroundColor: '#C9C9C9',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            width: 60,
            height: 60,
            alignSelf: 'center',
            opacity: 0.5,
            fontSize: 32,
            margin: '12px 0',
          },
        }}
        backwardBtnProps={{
          children: '<',
          style: {
            backgroundColor: '#C9C9C9',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            width: 60,
            height: 60,
            alignSelf: 'center',
            opacity: 0.5,
            fontSize: 32,
            margin: '12px 0',
          },
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              margin: '24px 4px',
              height: 16,
              width: 16,
              borderRadius: '50%',
              border: 0,
            },
          },
          activeItemBtnProps: {
            style: {
              margin: '24px 4px',
              height: 16,
              width: 16,
              borderRadius: '50%',
              border: 0,
              background: '#C4FF00',
            },
          },
        }}
        itemsToShow={1}
        speed={400}
      >
        {project &&
          Array.from({ length: 10 }).map((item, index) => (
            <div
              style={{
                flexWrap: 'nowrap',
                width: isMobile ? 360 : 1000,
              }}
              key={index}
            >
              <Image
                src={`/images/${project?.name}/${index}.jpg`}
                layout="responsive"
                alt={project.name}
                key={index}
                width={1280}
                height={720}
                loading="lazy"
              ></Image>
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default dynamic(() => Promise.resolve(WorkDetail), {
  ssr: false,
});
