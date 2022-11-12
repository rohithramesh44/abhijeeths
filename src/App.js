import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Container } from "./style";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import GlobalStyle from "./Components/GlobalStyle";

function App() {
  const theme = {
    colors: {
      prim: "#ff6b81",
      black: "#2f3542",
      blackLi: "#a4b0be",
      offWhite: "#dfe4ea",
      white: "#ffff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AnimatePresence>
          <Navbar />
          <AnimatedRoutes />
          <Container>
            <Footer />
          </Container>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
