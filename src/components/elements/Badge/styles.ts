import styled, { css } from 'styled-components';

interface IContainer {
  type: 'error' | 'warning' | 'success' | 'info';
}

const badgeTypes = {
  success: css`
    color: #10ada6;
    background-color: #c9f7f5;
    border-color: #10ada6;
  `,

  error: css`
    color: #f64e60;
    background-color: #ffe2e5;
    border-color: #f64e60;
  `,

  warning: css`
    color: #ffa800;
    background-color: #fff4de;
    border-color: #ffa800;
  `,

  info: css`
    color: #4c33cc;
    background-color: #adb1ed;
    border-color: #4c33cc;
  `,
};

export const Container = styled.span<IContainer>`
  padding: 8px 12px;

  color: white;

  font-size: 1.15rem;
  font-weight: 500;

  border: solid 2px;
  border-radius: 40px;

  ${props => badgeTypes[props.type]}
`;
