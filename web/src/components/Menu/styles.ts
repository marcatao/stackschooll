import styled, { css } from "styled-components";

export interface ItemSelectedProps {
  selected?: boolean;
}

export const MenuWrapper = styled.menu`
  display: flex;

  width: 100%;
  height: 100%;
`;

export const MenuItems = styled.ul`
  display: flex;

  width: 100%;

  > li:last-child {
    border-bottom: 0.1rem solid ${props => props.theme.colors.background};
  }

  @media (min-width: 501px) {
    flex-direction: column;

    margin-top: 10rem;
  }
`;

const itemSelectedStyle = css`
  border-top: 3px solid ${props => props.theme.colors.primary};

  @media (min-width: 501px) {
    font-weight: bold;

    border-top: none;
    border-right: 3px solid ${props => props.theme.colors.primary};
  }

  @media (min-width: 1100px) {
    font-weight: bold;
  }

  background: ${props => props.theme.colors.background};

  > span {
    color: ${props => props.theme.colors.textTitle};
  }

  > span > a {
    color: ${props => props.theme.colors.textTitle};
  }

  > svg {
    > path {
      fill: ${props => props.theme.colors.textTitle};
    }
  }
`;

export const MenuItem = styled.li<ItemSelectedProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 64px;

  transition: background 0.3s, color 0.3s, font-weight 0s;
  cursor: pointer;

  border-top: 0.1rem solid ${props => props.theme.colors.background};

  > svg {
    width: 30%;
    height: 30%;

    max-width: 80px;
    max-height: 32px;

    display: flex;
    justify-content: flex-start;

    > path {
      fill: ${props => props.theme.colors.textBase};
    }
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.colors.textBase};

    width: 100%;
    height: calc(100% - 32px);
  }

  > span > a {
    color: ${props => props.theme.colors.textBase};
  }

  &:hover,
  &:active {
    > span,
    a {
      color: ${props => props.theme.colors.textTitle};
    }

    > svg {
      > path {
        fill: ${props => props.theme.colors.textTitle};
      }
    }
  }

  @media (min-width: 501px) {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    height: 100px;

    padding: 0;

    > svg {
      width: 50%;
      height: 50%;
    }

    > span {
      display: flex;
      justify-content: center;
      align-items: center;

      max-width: 100%;
      max-height: 32px;
    }
  }

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;

    justify-content: flex-start;
    align-items: center;

    padding-left: 1rem;

    > svg {
      width: 50%;
      height: 50%;
    }

    > span {
      display: flex;
      justify-content: flex-start;

      width: 100%;
      max-width: calc(100% - 80px);

      height: 100%;
      max-height: 100%;

      > a {
        width: auto;
        height: auto;
      }
    }
  }

  ${props => props.selected && itemSelectedStyle};
`;
