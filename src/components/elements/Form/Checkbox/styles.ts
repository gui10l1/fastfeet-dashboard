import styled, { css } from 'styled-components';

interface IContainer {
  isChecked: number;
}

export const Container = styled.label<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 30px;

  position: relative;

  background-color: #fff;

  border: 1px solid #dce2e6;
  border-radius: 10px;

  cursor: pointer;

  transition: background-color 0.2s, border-color 0.2s;

  > svg {
    color: #fff;

    width: 24px;
    height: 24px;

    z-index: 1;

    position: absolute;
  }

  > input {
    cursor: pointer;

    z-index: 2;

    opacity: 0;

    flex: 1;

    height: 100%;
  }

  ${props =>
    props.isChecked &&
    css`
      background-color: var(--success);
      border-color: transparent;
    `}
`;
