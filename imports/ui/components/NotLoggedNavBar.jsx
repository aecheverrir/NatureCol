import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from 'react-router-dom';

import { Image, Nav, Navbar, NavItem, Button, ButtonGroup, NavDropdown, MenuItem, Glyphicon } from "react-bootstrap";

import PropTypes from "prop-types";

export default class NavigationBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink activeStyle={{ color: "#61c757"}} to="/" >NatureCol</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/second">
                <NavItem >SecondPage</NavItem>
              </LinkContainer>
              <LinkContainer to="/">
                <NavItem >Home</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}
