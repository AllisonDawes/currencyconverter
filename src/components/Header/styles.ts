import styled from "styled-components";

export const Container = styled.header`
  background: var(--secundary);

  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 0.2rem;

    display: grid;

    h2 {
      color: var(--shape);
      margin-bottom: 1rem;
    }

    div {
      width: 100%;

      ul {
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          display: inline;
        }

        li a {
          padding: 5px 30px;
          margin: 0;
          text-decoration: none;
          color: var(--text-body);

          transition: 0.4s;
        }

        li a:hover {
          color: var(--primary);
          background: var(--green);
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
      }
    }
  }
`;
