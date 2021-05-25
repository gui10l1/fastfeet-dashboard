import styled from 'styled-components';

export const Container = styled.header`
  margin-left: 96px;
  margin-bottom: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 96px;
  width: calc(100% - 98px);

  border-bottom: 1px solid #dce2e6;
  background-color: #fff;

  padding: 0 112px;

  button {
    svg {
      margin-right: 8px;

      width: 24px;
      height: 24px;
    }

    max-width: 214px;
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--success);

    color: white;

    border-radius: 10px;

    font-size: 1.15rem;
  }
`;
