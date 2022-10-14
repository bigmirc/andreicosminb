import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Nav.module.css';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';

const links = [
  {
    url: '/',
    label: 'HOME',
  },
  {
    url: '/about',
    label: 'ABOUT',
  },
  {
    url: '/work',
    label: 'WORK',
  },
  {
    url: '/contact',
    label: 'CONTACT',
  },
];

const Nav = ({ page }) => {
  const router = useRouter();
  const { isMobile } = useIsMobile();
  return (
    <div className={isMobile ? style.containerMobile : style.container}>
      {links.map((link, i) => (
        <Link
          className={page === ' home' ? styles.blackText : ''}
          key={i}
          href={link.url}
        >
          <div
            className={`${isMobile ? style.linkMobile : style.link} ${
              router.pathname === link.url ? style.linkActive : ''
            }`}
          >
            <p>{link.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Nav), {
  ssr: false,
});
