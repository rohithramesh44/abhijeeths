import React from "react";
import { motion } from "framer-motion";
import { Content } from "../style";
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

export default About;
