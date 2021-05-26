import styled, { css } from 'styled-components';

interface IContainer {
  buttonWrapper: number;
}

export const Container = styled.div<IContainer>`
  display: flex;

  flex-wrap: wrap;

  flex: 1;
  gap: 20px;

  & + div {
    margin-top: 16px;
  }

  ${props =>
    props.buttonWrapper &&
    css`
      justify-content: flex-end;
    `}
`;
