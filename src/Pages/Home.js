import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { pageAni } from "../Animations";
import Slider from "../Components/Slider";
import { Container, Btn } from "../style";

function Home() {
  return (
    <motion.div variants={pageAni} initial="hidden" animate="show" exit="exit">
      <Container>
        <HeroText>
          <div>
            <h1>
              Hello. This is Abhijeeth. Visual Designer & Artist from India :)
            </h1>
            <Btn>
              <a to="/">View Portfolio</a>
            </Btn>
          </div>
        </HeroText>
      </Container>
      <Slider />
    </motion.div>
  );
}
const HeroText = styled.section`
  height: 65vh;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  @media (max-width: 576px) {
    height: 30vh;
    h1 {
      font-size: 3.4rem;
    }
  }
  @media (max-width: 768px) {
    height: 40vh;
  }
  @media (max-width: 992px) {
    height: 40vh;
  }
  @media (max-width: 1200px) {
  }

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
