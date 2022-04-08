import React from "react";

import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Converter } from "./components/Converter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Converter />
      <Footer />
    </>
  );
}

export default App;
