import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
`;

export const User = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: start;

  max-width: calc(100% / 2 - 42px);
  min-width: 490px;
  width: 100%;

  border-radius: 10px;

  background-color: #4c4766;

  padding: 16px 24px;

  transition: transform 0.3s;

  &:hover {
    transform: translateX(10px);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  > img {
    max-width: 100%;
    height: auto;

    margin-right: 16px;
  }

  > div {
    > h1 {
      color: white;
    }

    > span {
      font-size: 1.15rem;
      color: var(--texts-in-blue);
    }
  }
`;
