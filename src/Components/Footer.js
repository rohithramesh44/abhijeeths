import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <h5>Abhijeeth S</h5>
      <p>Copyright © 2022 abhijeeths - All Rights Reserved.</p>
    </Foot>
  );
}
const Foot = styled.footer`
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h5 {
    margin-bottom: 2rem;
    font-weight: 400;
  }
  p {
    text-align: center;
  }
  @media (max-width: 992px) {
    height: 20vh;
  }
  @media (max-width: 768px) {
    h5 {
      font-size: 1.8rem;
    }
  }
`;
export default Footer;
