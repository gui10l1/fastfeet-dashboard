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
  position: relative;

  flex: 1;

  display: flex;
  align-items: center;

  background-color: var(--white);

  border-radius: 12px;
  border: 2px dashed #dce2e6;

  height: 160px;

  margin-top: 6px;

  transition: border-color 0.2s;

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--blue);
    `}

  > span {
    z-index: 3;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    font-size: 1.15rem;
    color: var(--texts);
    font-weight: 500;

    > svg {
      margin-right: 16px;
      margin-left: 8px;
      color: var(--texts);

      transition: color 0.2s;
    }
  }

  > input {
    z-index: 5;

    cursor: pointer;

    opacity: 0;

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

export const ChildrenContainer = styled.div`
  z-index: 4;

  position: absolute;

  width: 100%;
  height: 100%;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 16px;

  padding: 10px;
`;
