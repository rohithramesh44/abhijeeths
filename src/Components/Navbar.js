import React from "react";
import styled from "styled-components";
import { Link, Router } from "react-router-dom";

function Navbar() {
  return (
    <NavbarStyle>
      <Container>
        <ul>
          <li>
            <a to="/">home</a>
          </li>
          <li>
            <a to="/">home</a>
          </li>
          <Logo>
            <a to="/">home</a>
          </Logo>
          <li>
            <a to="/">home</a>
          </li>
          <li>
            <a to="/">home</a>
          </li>
        </ul>
      </Container>
    </NavbarStyle>
  );
}
const NavbarStyle = styled.div`
  font-size: 3rem;
  color: red;
`;
const Container = styled.div``;
const Logo = styled.li``;
export default Navbar;
