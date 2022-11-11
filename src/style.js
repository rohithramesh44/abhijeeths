import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 576px) {
    max-width: 88%;
  }
  @media (max-width: 992px) {
    max-width: 90%;
  }
`;
export const Btn = styled.span`
  position: relative;
  padding: 1.6rem 3rem;
  font-size: 1.8rem;
  text-transform: capitalize;
  display: inline-block;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.colors.black};
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  z-index: 22;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
  &::before {
    content: "";
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -22;
    border-radius: 100px;
    /* transform: skew(45deg); */
    background-color: ${(props) => props.theme.colors.black};
    transition: all 0.1s ease-in-out;
  }
  &:hover::before {
    height: 100%;
    /* transform: skew(0deg); */
  }
  @media (max-width: 992px) {
    padding: 1.4rem 2.8rem;
  }
  @media (max-width: 768px) {
    padding: 1.2rem 2.6rem;
  }
  @media (max-width: 576px) {
    padding: 1rem 2.4rem;
  }
`;
export const Content = styled.div`
  height: 90vh;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
