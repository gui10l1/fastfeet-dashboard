import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  flex: 1;

  display: flex;
  align-items: center;
  gap: 32px;

  > span {
    width: calc(100% / 4 - 32px);
    height: 300px !important;

    border-radius: 10px;
  }
`;
