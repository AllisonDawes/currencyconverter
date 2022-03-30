import React from "react";

import { GlobalStyle } from "./styles/global";

import { Converter } from "./components/Converter";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Converter />
    </>
  );
}

export default App;
