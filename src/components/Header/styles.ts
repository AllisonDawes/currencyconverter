import styled from "styled-components";

export const Container = styled.header`
  background: var(--secundary);

  div {
    padding: 2rem 1rem 0.2rem;
    width: 100%;
    display: grid;

    h2 {
      color: var(--shape);
      margin-bottom: 1rem;
    }

    img {
      height: 1.2rem;
      margin-bottom: 15px;
    }

    div {
      max-width: 1120px;
      margin: 0 auto;

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
