import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => scroll.scrollToTop()}
      />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-100} // Adjust based on navbar height
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="program"
            smooth={true}
            duration={800}
            offset={-140}
            spy={true}
            activeClass="active"
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-160}
            spy={true}
            activeClass="active"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            smooth={true}
            duration={800}
            offset={-100}
            spy={true}
            activeClass="active"
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            duration={800}
            offset={-140}
            spy={true}
            activeClass="active"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-100}
            spy={true}
            activeClass="active"
          >
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
