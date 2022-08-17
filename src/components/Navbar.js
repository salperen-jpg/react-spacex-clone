import React from 'react';
import { navLinks } from '../utils';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import styled from 'styled-components';
const Navbar = () => {
  return (
    <Wrapper>
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
          <span className='shop nav-link'>Shop</span>
          <GiHamburgerMenu className='hamburger' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .nav-center {
    width: min(90vw, 1400px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-center .logo-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .logo-container img {
    max-width: 200px;
  }
  .nav-links {
    display: none;
  }
  .nav-link {
    color: var(--clr-white);
    text-transform: uppercase;
    font-size: 0.8rem;
    padding-bottom: 3px;
    position: relative;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--clr-white);
    transform: scaleX(0);
    transition: var(--transition);
  }
  .nav-link:hover::after {
    transform: scaleX(1);
  }
  .shop {
    display: none;
  }
  @media screen and (min-width: 800px) {
    .nav-center .logo-container {
      justify-content: flex-start;
      flex: none;
    }
    .nav-links {
      display: flex;
      gap: 1rem;
      flex: 1;
      margin-left: 2rem;
    }
    .nav-right {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .hamburger {
      font-size: 1.2rem;
    }
    .shop {
      display: block;
    }
  }
`;
export default Navbar;