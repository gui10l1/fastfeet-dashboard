import { Link as LinkDOM } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ILink {
  active: number;
}

export const Container = styled.aside`
  max-width: 96px;
  width: 100%;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;

  background-color: var(--blue);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding: 10px 0;
`;

export const BrandContainer = styled.div`
  width: 100%;

  padding: 10px;

  margin-top: 4px;

  > img {
    width: 65px;
    height: 73px;
  }
`;

export const Menus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;

  svg {
    color: white;
    height: 24px;
    width: 24px;
  }
`;

export const Link = styled(LinkDOM)<ILink>`
  text-decoration: none;

  position: relative;

  color: var(--titles);

  &:hover {
    > span {
      opacity: 1;
      visibility: visible;
    }
  }

  > span {
    opacity: 0;
    visibility: hidden;

    background-color: var(--white);

    padding: 7px 12px;

    border-radius: 10px;

    position: absolute;

    box-shadow: rgb(0 0 0 / 75%) 0px 1px 9px -3px;

    margin-left: 10px;

    font-size: 1.15rem;
    font-weight: 500;

    transition: opacity 0.4s, visibility 0.4s;

    &::before {
      content: '';

      position: absolute;
      top: 50%;
      right: 100%;

      transform: translateY(-50%);

      border-style: solid;
      border-color: transparent white transparent transparent;
      border-width: 5px;
    }
  }

  ${props =>
    !props.active &&
    css`
      color: var(--texts-complements);

      > svg {
        opacity: 0.5;
      }
    `}
`;

export const Logout = styled.div`
  margin-bottom: 22px;

  > svg {
    color: white;
  }
`;
