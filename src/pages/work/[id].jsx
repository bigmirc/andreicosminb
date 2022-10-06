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
      <p>{project?.id}</p>
      <p>{project?.type}</p>
      <p>{project?.name}</p>
      <p>{project?.description}</p>
    </div>
  );
};

export default WorkDetail;
