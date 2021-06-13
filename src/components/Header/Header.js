import React from 'react';
import { Nav } from '../Nav';

import { HEADER_NAVIGATION } from '../../utils/variables';
import './Header.scss';


export const Header = () => {

  return (
    <div className="Header">
      <div className="Header-NavAndLogo">
        <img
          src="img/logo.svg"
          alt="header-logo"
          className="Header-Logo"
        />
        <Nav navLinks={HEADER_NAVIGATION} />
      </div>
    </div>
  );
};
