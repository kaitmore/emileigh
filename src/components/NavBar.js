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
        {props.posts.map((post, i) => {
          return <NavLink key={i}>
            <Link to={`/${post.fields.title.toLowerCase()}`} style={{ color: '#000', textDecoration: 'none' }}>
              {post.fields.title}
            </Link>
          </NavLink>
        })}
      </NavLinks>
    </Nav>
  )
}

export default NavBar;