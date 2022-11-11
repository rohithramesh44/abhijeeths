import React from "react";
import { motion } from "framer-motion";
import { Content } from "../style";
import { pageAni } from "../Animations";

function Contact() {
  return (
    <motion.div variants={pageAni} initial="hidden" animate="show" exit="exit">
      <Content>
        <h1>Contact</h1>
      </Content>
    </motion.div>
  );
}

export default Contact;
