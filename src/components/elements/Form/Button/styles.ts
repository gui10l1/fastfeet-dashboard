import styled, { css } from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  height: 48px;

  border-radius: 10px;

  padding: 11px 32px;

  font-size: 1.15rem;

  > svg {
    margin-right: 8px;
  }

  ${props =>
    props.type === 'submit' &&
    css`
      background-color: var(--success);
      color: white;

      > svg {
        color: #fff;
      }
    `}

  ${props =>
    props.type === 'reset' &&
    css`
      background-color: var(--danger);
      color: white;

      > svg {
        color: #fff;
      }
    `}
`;
