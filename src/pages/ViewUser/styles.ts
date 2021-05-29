import styled from 'styled-components';
import { Container as HeaderComponent } from '../../components/layouts/Header/styles';

export const Container = styled.div``;

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
