import React from 'react';
import projects from '../../utils/projects';

const Projects = () => {
  return (
    <div>
      {projects.map((proj) => {
        <div className={styles.project}>{proj}</div>;
      })}
    </div>
  );
};

export default Projects;
