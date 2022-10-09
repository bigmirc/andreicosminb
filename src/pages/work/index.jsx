import React from 'react';
import Project from '../../components/project/Project';
import projects from '../../utils/projects';
import styles from './work.module.css';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';

const Projects = () => {
  const { isMobile } = useIsMobile();
  return (
    <>
      <div className={isMobile ? styles.titleMobile : styles.title}>WORK</div>
      <div className={styles.projectsContainer}>
        {projects.map((proj) => (
          <Project key={proj.name} project={proj}>
            {proj.name}
          </Project>
        ))}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Projects), {
  ssr: false,
});
