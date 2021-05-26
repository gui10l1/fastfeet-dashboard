import styled, { css } from 'styled-components';

interface IContainer {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  flex: 1;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: var(--texts-base);
`;

export const Content = styled.div<IContainer>`
  flex: 1;

  display: flex;
  align-items: center;

  background-color: var(--white);

  border-radius: 12px;
  border: 2px solid #dce2e6;

  height: 56px;

  margin-top: 6px;

  transition: border-color 0.2s;

  padding-right: 10px;

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--blue);
    `}

  > svg {
    margin-right: 16px;
    margin-left: 8px;
    color: var(--texts-base);

    transition: color 0.2s;

    ${props =>
      props.isFilled &&
      css`
        color: var(--yellow);
      `}
  }

  > input {
    flex: 1;

    height: 100%;

    background-color: transparent;

    border: none;

    font-size: 1.15rem;
    color: var(--texts-base);
    font-weight: 500;

    padding-right: 10px;

    &::placeholder {
      color: var(--texts);
    }
  }
`;
