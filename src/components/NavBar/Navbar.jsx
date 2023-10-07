import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import Logo from '../../assets/logo.png';
import cont from '../../assets/contact.png';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={Logo} alt="logo" className="logo" />

        <div className="desktop">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
          <Link className="desktopMenuListItem">Clients</Link>
        </div>

        <button className="deskbtn">
          <img src={cont} alt="icon" className="contact" />
          Contact Me
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
