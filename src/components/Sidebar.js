import React from 'react';
import { useGlobalContext } from '../context';
import { sidebarLinks } from '../utils';
import { MdOutlineClose } from 'react-icons/md';
import styled from 'styled-components';
const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
        <div
          className={isSidebarOpen ? 'sidebar-content show' : 'sidebar-content'}
        >
          <div className='btn-container'>
            <button className='btn close-btn' onClick={toggleSidebar}>
              <MdOutlineClose />
            </button>
          </div>
          <ul>
            {sidebarLinks.map((link) => {
              return (
                <li key={link.id} className='sidebarLink'>
                  {link.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .sidebar {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -99;
    visibility: hidden;
    transition: var(--transition);
  }
  .open {
    z-index: 99;
    visibility: visible;
  }

  .sidebar-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    height: 100%;
    background-color: var(--clr-black);
    padding: 2rem;
    transform: translateX(100%);
    transition: all 0.6s ease-in;
    .btn-container {
      text-align: right;
      .close-btn {
        background-color: transparent;
        color: var(--clr-white);
        font-size: 2rem;
        border: none;
        cursor: pointer;
      }
    }
    ul {
      text-align: right;
      li {
        display: block;
        padding: 1rem 0;
        text-transform: uppercase;
        border-bottom: 1px solid var(--alternative-gray);
        font-size: 0.9rem;
        cursor: pointer;
        transition: var(--transition);
      }
      li:hover {
        color: #ccc;
      }
    }
  }
  .show {
    transform: translateX(0);
  }
`;

export default Sidebar;
