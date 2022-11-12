import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import data from "../data.js";
import Home from "../Pages/Home";
import Portfolio from "../Pages/Porfolio";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  const works = useState(data);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio works={works} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
