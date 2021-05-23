import styled, { css } from 'styled-components';

interface IContainer {
  isFocused: number;
  isFilled: number;
}

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;

  margin: 14px 0;

  background-color: var(--white);

  > div:nth-child(1) {
    flex: 1;
  }

  ${props =>
    props.isFocused || props.isFilled
      ? css`
          margin: 14px 0;
        `
      : css`
          margin: 0px;
        `}

  label {
    margin-left: 24px;

    color: var(--texts-complements);

    ${props =>
      props.isFocused || props.isFilled
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }

  input {
    border: 0;
    border-radius: 10px 10px 0 0;

    width: 100%;

    ${props =>
      props.isFocused || props.isFilled
        ? css`
            padding: 6px 24px;
          `
        : css`
            padding: 24px;
          `}

    font-size: 1.15rem;

    &::placeholder {
      color: var(--texts-complements);

      ${props =>
        props.isFocused || props.isFilled
          ? css`
              visibility: hidden;
            `
          : css`
              visibility: visible;
            `}
    }
  }
`;
