import styled from "styled-components";

export const Container = styled.header`
  background: var(--secundary);

  div {
    padding: 2rem;
    width: 100%;

    img {
      @media (max-width: 540px) {
        height: 1rem;

        @media (max-width: 360px) {
          height: 0.8rem;
        }
      }

      height: 1.2rem;
      margin-bottom: 15px;
    }
  }
`;
