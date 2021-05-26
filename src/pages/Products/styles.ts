import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 32px;
`;

export const Card = styled.div`
  width: calc(100% / 4 - 32px);

  border-radius: 10px;

  background-color: #fff;

  border: 1px solid #dce2e6;

  position: relative;
`;

export const ImageWrapper = styled.div`
  border-radius: 10px;

  > img {
    max-width: 100%;
    max-height: 300px;
    height: auto;

    border-radius: 10px 10px 0 0;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;

  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  gap: 4px;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    height: 40px;
    width: 40px;

    background-color: var(--background);

    border: 1px solid #dce2e6;

    &:nth-child(1) {
      border-radius: 10px 0 0 10px;
    }

    &:nth-child(2) {
      border-radius: 0 10px 10px 0;
    }

    > svg {
      width: 20px;
      height: 20px;

      color: var(--titles);
    }
  }
`;

export const Content = styled.div`
  padding: 24px;

  > h1 {
    font-size: 1.45rem;
  }

  > span {
    font-size: 1.15rem;
  }
`;
