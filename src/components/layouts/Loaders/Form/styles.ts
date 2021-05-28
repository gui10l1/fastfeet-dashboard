import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  flex: 1;

  display: flex;
  align-items: center;
  gap: 32px;

  & + div {
    margin-top: 20px;
  }

  > span {
    flex: 1;

    border-radius: 10px !important;
  }
`;
