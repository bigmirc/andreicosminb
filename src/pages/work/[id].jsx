import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import projects from '../../utils/projects';
import styles from './work.module.css';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';

const WorkDetail = () => {
  const router = useRouter();
  const { isMobile } = useIsMobile();
  const { id } = router.query;
  const [project, setProject] = useState({});

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
      <div
        className={
          isMobile ? styles.projectContainerMobile : styles.projectContainer
        }
      >
        <Image
          src={`/images/${project.name}/cover.jpg`}
          layout="responsive"
          alt={project.name}
          width={1740}
          height={980}
        ></Image>
        <div className={styles.projectDetailContainer}>
          <div className={isMobile ? styles.topMobile : styles.top}>
            <div className={styles.projectName}>{project?.name}</div>
            <div
              className={
                isMobile ? styles.descriptionMobile : styles.description
              }
            >
              {project?.description}
            </div>
          </div>
          <div className={isMobile ? styles.bottomMobile : styles.bottom}>
            <div className={styles.detailBox}>
              <div className={styles.detailBoxTitle}>Area</div>
              <p className={styles.detailBoxInfo}>{project?.type}</p>
            </div>
            <div className={styles.detailBox}>
              <div className={styles.detailBoxTitle}>Year of production</div>
              <p className={styles.detailBoxInfo}>{project?.year}</p>
            </div>
            <div className={styles.detailBox}>
              <div className={styles.detailBoxTitle}>Kind</div>
              <p className={styles.detailBoxInfo}>{project?.kind}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          isMobile ? styles.imageRollContainerMobile : styles.imageRollContainer
        }
      >
        {project &&
          Array.from({ length: 10 }).map((item, index) => (
            <div
              style={{
                flexWrap: 'nowrap',
                width: '100%',
                marginBottom: '24px',
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
      </div>
      <p className={isMobile ? styles.futerMobile : styles.futer}>
        ©Andrei Cosmin Bălă 2022
      </p>
    </>
  );
};

export default dynamic(() => Promise.resolve(WorkDetail), {
  ssr: false,
});
