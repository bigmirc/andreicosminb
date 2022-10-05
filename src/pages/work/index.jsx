import React from 'react';
import { Project } from '../../components/project/Project';
import projects from '../../utils/projects';
import styles from './work.module.css';

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((proj) => (
        <Project key={proj.name} project={proj}>
          {proj.name}
        </Project>
      ))}
    </div>
  );
};

export default Projects;
