import React from "react";
import { motion } from "framer-motion";
import { Content } from "../style";
import { pageAni } from "../Animations";

function Porfolio() {
  return (
    <motion.div variants={pageAni} initial="hidden" animate="show" exit="exit">
      <Content>
        <h1>Portfolio</h1>
      </Content>
    </motion.div>
  );
}

export default Porfolio;
