import React from "react";

import logoConverter from "../../assets/logo-converterdws.png";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <img src={logoConverter} alt="" />
      </div>
    </Container>
  );
}
