import styled, { css } from 'styled-components';

interface IContainer {
  type: 'warning' | 'success' | 'error';
}

const styleTypes = {
  warning: css`
    > svg {
      color: var(--yellow);
    }

    > span {
      background-color: #f7e0b2;
      color: var(--yellow);

      &::after {
        border-color: #f7e0b2 transparent transparent;
      }
    }
  `,
  success: css`
    > svg {
      color: var(--success);
    }

    > span {
      background-color: #b6e3cc;
      color: var(--success);

      &::after {
        border-color: #b6e3cc transparent transparent;
      }
    }
  `,
  error: css`
    > svg {
      color: var(--error);
    }

    > span {
      background-color: #ffe2e5;
      color: var(--error);

      &::after {
        border-color: #ffe2e5 transparent transparent;
      }
    }
  `,
};

export const Container = styled.div<IContainer>`
  width: 20px;
  height: 20px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: help;

  text-align: center;

  ${props => styleTypes[props.type]}

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  > span {
    visibility: hidden;
    opacity: 0;

    position: absolute;

    bottom: 100%;
    left: 50%;

    transform: translateX(-50%);

    margin-bottom: 7px;

    padding: 5px 8px;

    border-radius: 10px;

    width: 160px;

    transition: visibility 0.4s, opacity 0.4s;

    &::after {
      content: '';

      position: absolute;

      top: 100%;
      left: 50%;

      transform: translateX(-50%);

      border-style: solid;
      border-width: 7px;
      border-style: solid;
    }
  }
`;
