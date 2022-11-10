import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
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
    background-color: ${(props) => props.theme.colors.black};
    transition: height 0.1s ease-in-out;
  }
  &:hover::before {
    height: 100%;
  }
`;
