import Image from 'next/image';
import styles from './project.module.css';
import Link from 'next/link';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';

const Project = ({ project }) => {
  const { isMobile } = useIsMobile();
  console.log(isMobile);
  return (
    <div className={styles.project}>
      <div className={styles.divider}></div>
      <p className={styles.projectType}>{project.type}</p>
      <div className={styles.projectImg}>
        <Image
          src={`/images/${project.name}/cover.jpg`}
          layout="responsive"
          alt={project.name}
          width={1740}
          height={980}
        ></Image>
      </div>
      <Link href={`/work/${project.id}`}>
        <a className={styles.projectButton}>Full Project</a>
      </Link>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Project), {
  ssr: false,
});
