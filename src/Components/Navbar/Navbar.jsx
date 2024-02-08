'use client';
import React, { useState } from 'react';
import { Menu } from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleNavButtonClick = () => {
    setShowMenu(false);
  };

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
          <button onClick={() => { router.push('/'); handleNavButtonClick(); }}>Home</button>
        ) : (
          <button onClick={() => { router.push('/download'); handleNavButtonClick(); }}>Download</button>
        )}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <Menu />
      </div>
      {/* Render the menu based on the showMenu state */}
      {showMenu && (
        <div className="mobile-menu">
        {pathname === '/download' ? (
          <button onClick={() => { router.push('/'); handleNavButtonClick(); }}>Home</button>
        ) : (
          <button onClick={() => { router.push('/download'); handleNavButtonClick(); }}>Download</button>
        )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
