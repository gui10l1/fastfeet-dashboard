import styled from 'styled-components';

import backgroundImage from '../../assets/logistica-entrega.jpg';

export const Container = styled.main`
  display: flex;

  width: 100vw;
  height: 100vh;

  background-color: var(--background);
`;

export const Background = styled.div`
  flex: 1;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 736px;

  > h1 {
    color: var(--titles);
    font-size: 2.5rem;

    margin-bottom: 44px;
  }

  > form {
    max-width: 416px;
    width: 100%;

    margin: 0 auto;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid #dce2e6;
  border-radius: 10px;

  padding: 8px 0;

  background-color: var(--white);

  hr {
    border-color: #dce2e6;
    border-style: solid;
  }

  > div:nth-child(3) {
    input {
      border-radius: 0 0 10px 10px;
    }
  }
`;

export const RememberMe = styled.div`
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--texts-base);
  font-size: 1.15rem;

  > div {
    display: flex;
    align-items: center;

    > label {
      cursor: pointer;
    }
  }

  > a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 72px;

  margin-top: 32px;

  background-color: var(--yellow);

  border-radius: 10px;

  font-size: 1.15rem;

  color: var(--titles);
`;
