import React, { Component } from 'react';
import { Nav } from './style'
import { Link } from 'react-router-dom'
import { NavLinks, NavLink, Logo, Title } from './style'

const NavBar = (props) => {
  return (
    <Nav>
      <Logo>
        <Title>Emileigh Vandiver</Title>
        <img src={"../assets/images/bow.png"} style={{ width: 'auto', height: '25px', padding: '10px' }} />
      </Logo>
      <NavLinks>
        <NavLink>
          <Link to={`/about`} style={{ color: '#000', textDecoration: 'none' }}>
            About
            </Link>
        </NavLink>
        <NavLink><Link to={`/events`} style={{ color: '#000', textDecoration: 'none' }}>
          Events
            </Link> </NavLink>
        <NavLink><Link to={`/media`} style={{ color: '#000', textDecoration: 'none' }}>
          Media
            </Link> </NavLink>
        <NavLink><Link to={`/contact`} style={{ color: '#000', textDecoration: 'none' }}>
          Contact
            </Link>
        </NavLink>
      </NavLinks>
    </Nav>
  )
}

export default NavBar;