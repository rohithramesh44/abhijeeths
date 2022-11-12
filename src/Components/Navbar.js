import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { menuSliderAni, itemAni } from "../Animations";
import { Link } from "react-router-dom";
import { Container } from "../style";

function Navbar() {
  const [openMode, setOpenMode] = useState(false);
  console.log(openMode);
  return (
    <Container>
      <NavbarStyle>
        <div className="menu-icon" onClick={() => setOpenMode(true)}>
          <span></span>
        </div>
        <ul className="main-nav-list hidden">
          <li className="main-nav-item hidden">
            <Link to="/">home</Link>
          </li>
          <li className="main-nav-item hidden">
            <Link to="/portfolio">portfolio</Link>
          </li>
          <Logo>
            <Link to="/">Abhijeeth</Link>
          </Logo>
          <li className="main-nav-item hidden">
            <Link to="/about">About</Link>
          </li>
          <li className="main-nav-item hidden">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <AnimatePresence>
          {openMode && (
            <OpenMenu
              variants={menuSliderAni}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <MotionNav>
                <motion.li
                  variants={itemAni}
                  className="main-nav-item"
                  onClick={() => setOpenMode(false)}
                >
                  <Link to="/">home</Link>
                </motion.li>
                <motion.li
                  variants={itemAni}
                  className="main-nav-item"
                  onClick={() => setOpenMode(false)}
                >
                  <Link to="/portfolio">portfolio</Link>
                </motion.li>
                <motion.li
                  variants={itemAni}
                  className="main-nav-item"
                  onClick={() => setOpenMode(false)}
                >
                  <Link to="/about">About</Link>
                </motion.li>
                <motion.li
                  variants={itemAni}
                  className="main-nav-item"
                  onClick={() => setOpenMode(false)}
                >
                  <Link to="/contact">Contact</Link>
                </motion.li>
              </MotionNav>
              <div className="close-btn" onClick={() => setOpenMode(false)}>
                <span></span>
              </div>
            </OpenMenu>
          )}
        </AnimatePresence>
      </NavbarStyle>
    </Container>
  );
}
const MotionNav = styled(motion.ul)`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  margin-top: 13rem;
`;
const OpenMenu = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};

  ul {
    list-style: none;
  }

  .close-btn {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 4rem;
    right: 6rem;
    span {
      width: 100%;
      height: 100%;
      display: inline-block;
      position: relative;
    }
    span::before,
    span::after {
      content: "";
      display: inline-block;
      height: 0.4rem;
      width: 100%;
      position: absolute;
      top: 45%;
      left: 0;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.colors.black};
      transition: transform 0.3s ease-in-out;
    }
    span::before {
      transform: rotate(45deg);
    }
    span::after {
      transform: rotate(-45deg);
    }
  }
`;

const NavbarStyle = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 576px) {
    height: 10vh;
  }
  @media (max-width: 768px) {
    height: 10vh;
  }
  @media (max-width: 992px) {
    height: 12vh;
  }

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
      height: 0.5rem;
      display: inline-block;
      background-color: ${(props) => props.theme.colors.black};

      &::before {
        content: "";
        width: 100%;
        height: 0.5rem;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${(props) => props.theme.colors.black};
      }
      &::after {
        content: "";
        width: 100%;
        height: 0.5rem;
        display: inline-block;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: ${(props) => props.theme.colors.black};
      }
    }
  }

  .main-nav-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
  .main-nav-item.hidden {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .main-nav-item > a {
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 400;
    text-decoration: none;
    padding: 1.4rem 2.8rem;
    color: ${(props) => props.theme.colors.black};
    position: relative;
    z-index: 1;
    cursor: pointer;
    list-style: none;
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

    &::before {
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

    &:hover::before {
      height: 100%;
      transform: skew(0deg);
    }
  }
`;

const Logo = styled.span`
  font-size: 4.6rem !important;
  text-transform: capitalize;
  display: block;
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
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
  }
  @media (max-width: 576px) {
    a {
      font-size: 4rem;
    }
    margin-left: 3rem !important;
  }
  @media (max-width: 768px) {
    /* display: block !important; */
    a {
      font-size: 4.4rem;
    }
    margin: 0 auto;
  }
  @media (max-width: 992px) {
    a {
      font-size: 4.2rem;
    }
  }
  @media (max-width: 1200px) {
    font-size: 4rem !important;
  }
`;
export default Navbar;
