import React from "react";
import styled from "styled-components";

import Slider from "../Components/Slider";
import { Container, Btn } from "../style";

function Home() {
  return (
    <>
      <Container>
        <HomePage>
          <div>
            <h1>
              Hello. This is Abhijeeth. Visual Designer & Artist from India :)
            </h1>
            <Btn>
              <a to="/">View Portfolio</a>
            </Btn>
          </div>
        </HomePage>
      </Container>
      <Slider />
    </>
  );
}
const HomePage = styled.section`
  height: 65vh;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
    width: 75%;
    justify-self: center;
    h1 {
      margin-bottom: 2rem;
      font-weight: 300;
    }
    a {
      background-color: transparent;
    }
  }
`;
export default Home;
