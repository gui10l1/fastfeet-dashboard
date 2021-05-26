import styled from 'styled-components';
import { Container as HeaderComponent } from '../../components/layouts/Header/styles';

export const Header = styled(HeaderComponent)`
  button:nth-child(1) {
    background-color: var(--background);

    max-width: 40px;
    width: 100%;

    border-radius: 10px;
    border: 1px solid #dce2e6;

    > svg {
      color: var(--texts-complements);
      margin: 0;

      width: 20px;
      height: 20px;
    }
  }
`;

export const Container = styled.div``;

export const ImagesContainer = styled.div`
  > h1 {
    margin-bottom: 16px;
  }
`;

export const Images = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Image = styled.div`
  position: relative;

  > img {
    max-width: 500px;
    height: auto;

    border-radius: 10px;

    position: relative;
  }

  > label {
    position: absolute;

    top: 10px;
    right: 10px;
  }
`;
