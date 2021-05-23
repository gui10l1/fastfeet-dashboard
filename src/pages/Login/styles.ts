import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  position: relative;

  background-color: var(--background);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 416px;

  > h1 {
    color: var(--titles);
    font-size: 2.5rem;

    margin-bottom: 44px;
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
