import React from "react";

import logoConverter from "../../assets/logo-converter.png";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <img src={logoConverter} alt="" />

        <div>
          <ul>
            <li>
              <a href="#">Conversor de Moedas</a>
              <a href="#">Links</a>
              <a href="#">Sobre</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
