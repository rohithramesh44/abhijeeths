import React from "react";
import styled from "styled-components";
import { Link, Router } from "react-router-dom";
import { Container } from "../style";

function Navbar() {
  return (
    <Container>
      <NavbarStyle>
        <ul>
          <li>
            <a to="/">home</a>
          </li>
          <li>
            <a to="/">portfolio</a>
          </li>
          <Logo>
            <a to="/">Abhijeeth S</a>
          </Logo>
          <li>
            <a to="/">About</a>
          </li>
          <li>
            <a to="/">Contact</a>
          </li>
        </ul>
      </NavbarStyle>
    </Container>
  );
}
const NavbarStyle = styled.div`
  min-height: 20vh;
  display: grid;
  align-items: center;

  ul {
    display: grid;
    grid-template-columns: repeat(5, min-content);
    justify-content: space-between;
    align-items: center;

    list-style: none;

    li {
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 500;
      padding: 1.4rem 2.8rem;
      position: relative;
      z-index: 1;
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      &:active {
        color: ${(props) => props.theme.colors.blackLi};
      }
    }
    li::before {
      content: "";
      width: 100%;
      height: 0;
      transform: skew(50deg);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -3;
      background-color: ${(props) => props.theme.colors.offWhite};
      transition: all 0.1s ease-in-out;
    }

    li:hover::before {
      height: 100%;
      transform: skew(0deg);
    }
  }
`;

const Logo = styled.li`
  font-size: 4.8rem !important;
  text-transform: capitalize;
  text-align: center;
  min-width: 30rem;
  &:hover {
    color: #2f3542 !important;
  }
  &:active {
    color: #57606f;
  }
  &:hover::before {
    height: 0 !important;
    background-color: transparent !important;
  }
`;
export default Navbar;
