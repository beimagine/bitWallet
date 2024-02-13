'use client';
import React, { useState, useEffect } from 'react';
import { slide as Menu } from "react-burger-menu"
import { useRouter, usePathname } from 'next/navigation';
import './Navbar.css';

const Navbar = (props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => setMenuOpen(state.isOpen);

  const closeMenu = () => setMenuOpen(false);

  const handleButtonClick = (route) => {
      router.push(route);
      closeMenu();
  };

  useEffect(() => {
      const handleOutsideClick = (event) => {
          if (menuOpen && !event.target.closest(".bm-menu-wrap")) {
              closeMenu();
          }
      };
      document.addEventListener("click", handleOutsideClick);

      return () => {
          document.removeEventListener("click", handleOutsideClick);
      };
  }, [menuOpen]);

  useEffect(() => {
      document.body.classList.toggle("menu-open", menuOpen);
      return () => {
          document.body.classList.remove("menu-open");
      };
  }, [menuOpen]);

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://static.wixstatic.com/media/a065f2_8066744694014295adf44b9ae12883d6~mv2.png/v1/fill/w_176,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bit%20logo%20.png"
          alt="Logo"
        />
      </div>
      <div className='nav-items'>
        {pathname === '/download' ? (
          <button onClick={() => handleButtonClick('/')}><span className='NBtext'>Home</span></button>
        ) : (
          <button onClick={() => handleButtonClick('/download')}><span className='NBtext'>Download</span></button>
        )}
      </div>

<div className='sidebar'>
      <Menu right disableOverlayClick isOpen={menuOpen} onStateChange={handleStateChange} width={'180px'}>
        {menuOpen && (
          <div className="mobile-menu">
            {pathname === '/download' ? (
              <button onClick={() => handleButtonClick('/')}>Home</button>
            ) : (
              <button onClick={() => handleButtonClick('/download')}>Download</button>
            )}
          </div>
        )}
      </Menu>
      </div>
    </div>
  );
};

export default Navbar;
