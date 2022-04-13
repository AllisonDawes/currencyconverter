import styled from "styled-components";

export const Container = styled.div`
  form {
    @media (max-width: 540px) {
      min-width: 24rem;
      width: 1rem;
    }

    background: var(--secundary);
    min-width: 38rem;
    width: 2rem;
    margin: 4rem auto 0;
    padding: 1rem 1.5rem;
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
      @media (max-width: 540px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      display: flex;
      align-items: center;
      justify-content: space-around;

      input {
        @media (max-width: 540px) {
          margin-right: 0;
        }

        background: var(--input);
        border: none;
        height: 2.5rem;
        width: 100%;
        border-radius: 5px;
        padding: 0 10px;
        margin-right: 1rem;

        color: var(--shape);
        font-size: 1.2rem;
      }

      select {
        background: var(--input);
        border: none;
        height: 2.5rem;
        width: 100%;
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
  @media (max-width: 540px) {
    min-width: 24rem;
    width: 1rem;
  }

  min-width: 38rem;
  width: 2rem;
  margin: 1rem auto;
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 5rem;
    width: 5rem;

    align-self: center;
  }

  div {
    @media (max-width: 540px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    width: 100%;

    display: flex;
    align-items: stretch;
    justify-content: center;

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
  }
`;

export const Separator = styled.div`
  @media (max-width: 540px) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  background: var(--input);
  height: 1px;
  margin-bottom: 2rem;
`;

export const ContainerContent = styled.div`
  @media (max-width: 540px) {
    max-width: 24rem;
  }

  max-width: 38rem;
  margin: 0 auto;

  margin-top: 10rem;

  h2 {
    font-weight: 500;
    color: var(--shape);

    margin-bottom: 1rem;
  }

  h5 {
    font-weight: 400;
    color: var(--text-body);
    text-align: justify;
    line-height: 1.8;

    margin-bottom: 2rem;
  }
`;
