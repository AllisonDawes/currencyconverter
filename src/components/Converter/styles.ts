import styled from "styled-components";

export const Container = styled.div`
  form {
    background: var(--secundary);
    min-width: 38rem;
    width: 2rem;
    margin: 4rem auto 0;
    padding: 1rem 0;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      color: var(--shape);
      margin-bottom: 10px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;

      input {
        background: var(--input);
        border: none;
        height: 2.5rem;
        width: 12rem;
        border-radius: 5px;
        padding: 0 10px;

        color: var(--shape);
        font-size: 1.2rem;
      }

      select {
        background: var(--input);
        border: none;
        height: 2.5rem;
        width: 60%;
        border-radius: 5px;
        padding: 0 10px;
        margin: 10px 0;

        color: var(--shape);
        font-size: 1rem;
      }
    }
  }
`;

export const ContainerInfo = styled.div`
  min-width: 38rem;
  width: 2rem;
  margin: 1rem auto 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    height: 5rem;
    width: 5rem;

    align-self: center;
  }

  div {
    display: flex;
    flex-direction: column;

    h5 {
      color: var(--text-body);
      font-weight: 400;
    }

    h1 {
      color: var(--shape);
      font-weight: 500;
      margin: 1.2rem 0;
    }
  }
`;
