import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../styles/nav.module.css';
import PriceFilter from '../container/PriceFilter';

const Nav = () => (
  <nav className={css.nav}>
    <div className={css.container}>
      <PriceFilter />
      <NavLink to="/" className={css.link}>
        <span>Home</span>
      </NavLink>
    </div>
  </nav>
);

export default Nav;
