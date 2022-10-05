import React from 'react';
import projects from '../../utils/projects';
import styles from './work.module.css';

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((proj, index) => (
        <div key={index} className={styles.project}>
          {proj}
        </div>
      ))}
    </div>
  );
};

export default Projects;
