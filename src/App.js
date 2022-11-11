import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Components/Navbar";
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
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
