import styled, { css } from 'styled-components';

interface IContainer {
  isChecked: number;
}

export const Container = styled.label<IContainer>`
  width: 24px;
  height: 24px;

  border: 1px solid #dce2e6;
  border-radius: 8px;

  background-color: var(--white);

  cursor: pointer;

  transition: background-color 0.2s;

  position: relative;

  > input {
    opacity: 0;
    cursor: pointer;
  }

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    color: #fff;
  }

  ${props =>
    props.isChecked &&
    css`
      background-color: var(--success);
      border-color: transparent;
    `}
`;
