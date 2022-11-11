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
  }
`;
export default Footer;
