import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
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
      <>
        <GlobalStyle />
        <AnimatePresence>
          <Navbar />
          <Home />
        </AnimatePresence>
      </>
    </ThemeProvider>
  );
}

export default App;
