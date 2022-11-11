import React from "react";
import styled from "styled-components";
import { Link, Router } from "react-router-dom";
import { Container } from "../style";

function Navbar() {
  return (
    <Container>
      <NavbarStyle>
        <div className="menu-icon">
          <span></span>
        </div>
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
        <div></div>
      </NavbarStyle>
    </Container>
  );
}
const NavbarStyle = styled.div`
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu-icon {
    width: 4rem;
    height: 3rem;
    position: relative;
    display: none;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      display: flex;
    }
    cursor: pointer;
    span {
      width: 100%;
      height: 5px;
      display: inline-block;
      background-color: ${(props) => props.theme.colors.black};

      &::before {
        content: "";
        width: 100%;
        height: 5px;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${(props) => props.theme.colors.black};
      }
      &::after {
        content: "";
        width: 100%;
        height: 5px;
        display: inline-block;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: ${(props) => props.theme.colors.black};
      }
    }
  }

  ul {
    width: 100%;
    display: flex;
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
      &:hover {
        color: ${(props) => props.theme.colors.white};
      }
      &:active {
        color: ${(props) => props.theme.colors.blackLi};
      }
      @media (max-width: 900px) {
        padding: 1.2rem 2.4rem;
      }
      @media (max-width: 768px) {
        display: none;
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
      background-color: ${(props) => props.theme.colors.black};
      transition: all 0.1s ease-in-out;
    }

    li:hover::before {
      height: 100%;
      transform: skew(0deg);
    }

    /* @media (max-width: 1200px) {
      font-size: 4rem !important;
    } */
  }
`;

const Logo = styled.span`
  font-size: 4.8rem !important;
  text-transform: capitalize;
  display: block;
  text-align: center;
  cursor: pointer;
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
  @media (max-width: 900px) {
    font-size: 3.8rem !important;
  }
  @media (max-width: 1200px) {
    font-size: 4rem !important;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default Navbar;
