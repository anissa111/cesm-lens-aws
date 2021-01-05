import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">CESM LENS on AWS</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="overview">Overview</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="data-access">Data Access</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="data">Data</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="notebooks">Notebooks</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="data-citation-and-updates">
                Citation & Updates
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
