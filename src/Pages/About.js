import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAni } from "../Animations";

function About() {
  return (
    <motion.div variants={pageAni} initial="hidden" animate="show" exit="exit">
      <Content>
        <h1>About</h1>
      </Content>
    </motion.div>
  );
}
const Content = styled.div`
  height: 90vh;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default About;
