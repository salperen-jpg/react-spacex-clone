import React from 'react';
import { navLinks } from '../utils';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Logo from './Logo';
const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='logo-container'>
          <Logo />
        </div>
        <ul className='nav-links'>
          {navLinks.map((link) => {
            const { id, text, path } = link;
            return (
              <Link to={path} key={id} className='nav-link'>
                {text}
              </Link>
            );
          })}
        </ul>
        <div className='nav-right'>
          <span className='shop'>Shop</span>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
