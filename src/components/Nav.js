import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../styles/nav.module.css';
import PriceFilter from '../container/PriceFilter';

const Nav = () => (
  <nav className={css.nav}>
    <PriceFilter />
    <NavLink to="/">
      <span>Home</span>
    </NavLink>
  </nav>
);

export default Nav;
