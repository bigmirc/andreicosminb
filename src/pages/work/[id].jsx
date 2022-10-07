import Image from 'next/image';
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';
import projects from '../../utils/projects';
import styles from './work.module.css';

const WorkDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState({});

  useEffect(() => {
    if (!id) {
      return;
    }
    setProject(projects[+id]);
  }, [id]);
  return (
    <div className={styles.projectContainer}>
      <Image
        src={`/images/${project.name}/cover.jpg`}
        layout="responsive"
        alt={project.name}
        width={1740}
        height={980}
      ></Image>
      <div className={styles.projectDetailContainer}>
        <div className={styles.top}>
          <p className={styles.projectName}>{project?.name}</p>
          <p>{project?.description}</p>
        </div>
        <div className={styles.bottom}>
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
    </div>
  );
};

export default WorkDetail;
