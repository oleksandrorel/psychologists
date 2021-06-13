import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav = ({ navLinks }) => (
  <nav className="Navbar">
    {navLinks.map((nav) => (
      <NavLink
        key={nav}
        to={`/${nav}`}
        exact
        className="Navbar-Link"
        activeClassName='Navbar-Link_active'
      >
        {nav}
      </NavLink>
  ))}
  </nav>
);
