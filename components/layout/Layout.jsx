import React from 'react';
import Nav from '../nav/Nav'

const Layout = ({ children }) => (
  <>
    <div>
      <Nav />
      <div>
      {children}
      </div>
    </div>
  </>
);

export default Layout;
