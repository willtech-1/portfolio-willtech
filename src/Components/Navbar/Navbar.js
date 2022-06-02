import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  SpanOne,
  SpanTwo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  // navlinks
  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <SpanOne>Web</SpanOne>
            <SpanTwo>Dev</SpanTwo>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="home" smooth={true} duration={1000}>Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="about" smooth={true} duration={1000}>About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="skills" smooth={true} duration={1000}>Skills</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="projects" smooth={true} duration={1000}>Projects</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="contact" smooth={true} duration={1000}>Contact</NavLinks>
            </NavItem>
           
            
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
