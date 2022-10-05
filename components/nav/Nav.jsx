import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import style from './Nav.module.css';

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
  }
];

const Nav = () => {
  const router = useRouter();
  return (
            <div>
                <ul>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link href={link.url}>
                                <div
                                    className={`${style.link} ${
                                        router.pathname === link.url ? style.linkActive : ''
                                    }`}
                                >
                                    <p>{link.label}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
  );
};
export default Nav;