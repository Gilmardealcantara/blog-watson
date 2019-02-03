import React from 'react';
import {Navbar, NavItem} from 'react-materialize'


const HeaderBlog = props => {
  return (
    <div className="header-blog">
      <Navbar brand='Home' right style={{backgroundColor: '#424242'}}>
        <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    </div>
  );
}

export default HeaderBlog;