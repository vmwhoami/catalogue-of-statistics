import React from 'react';
import { NavLink } from 'react-router-dom';

import PriceFilter from './PriceFilter';

const Nav = () => (
  <nav>
    <PriceFilter />
    <NavLink to="/">
      <span>Home</span>
    </NavLink>
  </nav>
);

export default Nav;
