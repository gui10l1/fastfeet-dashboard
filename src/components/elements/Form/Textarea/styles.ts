import styled, { css } from 'styled-components';

interface ITextarea {
  isFocused: boolean;
  isDisabled: boolean;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: var(--texts-base);
  margin-bottom: 6px;
`;

export const TextareaStyled = styled.textarea<ITextarea>`
  max-width: 100%;
  width: 100%;

  background-color: transparent;

  border: none;

  font-size: 1.15rem;
  color: var(--texts-base);
  font-weight: 500;

  padding: 10px;

  background-color: var(--white);

  border-radius: 12px;
  border: 2px solid #dce2e6;

  transition: border-color 0.2s;

  &::placeholder {
    color: var(--texts);
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--blue);
    `}

  ${props =>
    props.isDisabled &&
    css`
      background-color: #e6e9ec;
    `}
`;
