import { useRouter } from 'next/router';
import React from 'react';
import projects from '../../utils/projects';
import styles from './work.module.css';

const WorkDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects[+id];
  console.log(project);
  return (
    <div className={styles.projectContainer}>
      <p>{project.id}</p>
      <p>{project.type}</p>
      <p>{project.name}</p>
      <p>{project.description}</p>
    </div>
  );
};

export default WorkDetail;
