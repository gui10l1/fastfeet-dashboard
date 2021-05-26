import { FC } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import { Container, ImageWrapper, ButtonWrapper, Content } from './styles';
import coldplayImage from '../../../../assets/coldplay.jpg';

const Card: FC = () => (
  <Container>
    <ButtonWrapper>
      <button type="button">
        <FiEdit />
      </button>
      <button type="button">
        <FiTrash />
      </button>
    </ButtonWrapper>

    <ImageWrapper>
      <img src={coldplayImage} alt="Coldplay" />
    </ImageWrapper>

    <Content>
      <h1>Nome do produto</h1>

      <span>5 itens</span>
    </Content>
  </Container>
);

export { Card };
