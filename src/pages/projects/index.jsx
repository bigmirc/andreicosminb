import React from 'react';
import projects from '../../utils/projects';
import styles from '../../styles/';

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((proj) => {
        <div className={styles.project}>{proj}</div>;
      })}
    </div>
  );
};

export default Projects;
