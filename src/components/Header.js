import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";

const Header = () => (
  <nav className="navbar">
    <Container>
      <ul className="nav">
        <li>
          <NavLink to="/" activeClassName="is-active" exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" activeClassName="is-active" exact={true}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="is-active">
            About
          </NavLink>
        </li>
      </ul>
    </Container>
  </nav>
);

export default Header;
