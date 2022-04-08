import React from "react";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <h2>converter.com</h2>

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
