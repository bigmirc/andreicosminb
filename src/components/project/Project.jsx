import Image from 'next/image';
import styles from './project.module.css';
import b from '../../assets/images/bon.jpg';
import Link from 'next/link';

export const Project = ({ project }) => {
  return (
    <div className={styles.project}>
      <div className={styles.divider}></div>
      <p className={styles.projectType}>{project.type}</p>
      <div className={styles.projectImg}>
        <Image layout="responsive" alt="hi" src={b}></Image>
      </div>
      <Link href="contact">
        <a className={styles.projectButton}>Full Project</a>
      </Link>
    </div>
  );
};
