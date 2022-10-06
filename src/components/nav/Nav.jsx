import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Nav.module.css';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';

const links = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/about',
    label: 'About',
  },
  {
    url: '/work',
    label: 'Work',
  },
  {
    url: '/contact',
    label: 'Contact',
  },
];

const Nav = () => {
  const router = useRouter();
  const { isMobile } = useIsMobile();
  return (
    <div className={isMobile ? style.containerMobile : style.container}>
      {links.map((link, i) => (
        <Link key={i} href={link.url}>
          <div
            className={`${style.link} ${
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
