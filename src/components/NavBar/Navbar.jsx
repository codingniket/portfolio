import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={Logo} alt="logo" className="logo" />

        <div className="desktop">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Portfolio
          </Link>
        </div>

        <button className="deskbtn">
          <a href="https://github.com/codingniket">Github</a>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
