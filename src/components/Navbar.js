import React, { useEffect } from 'react';
import { navLinks } from '../utils';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Logo from './Logo';
import styled from 'styled-components';
const Navbar = () => {
  const { toggleSidebar } = useGlobalContext();
  const [scrollDown, setScrollDown] = React.useState(false);
  const updateState = (event) => {
    if (event.deltaY < 0) {
      setScrollDown(false);
    } else if (event.deltaY > 0) {
      setScrollDown(true);
    }
  };
  useEffect(() => {
    document.body.addEventListener('wheel', updateState);
  }, [scrollDown]);
  return (
    <Wrapper>
      <div className={`nav-center ${scrollDown ? 'nav-none' : 'show-nav'}`}>
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
          <GiHamburgerMenu className='hamburger' onClick={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  z-index: 9999;
  height: 100px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 4s ease-in-out;

  .nav-none {
    opacity: 0;
    visibility: hidden;
    z-index: -99;
  }
  .show-nav {
    visibility: visible;
    opacity: 1;
    z-index: 99;
  }

  .nav-center {
    width: min(90vw, 1400px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: opacity 1s ease-in-out;
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
  @media screen and (min-width: 1000px) {
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
