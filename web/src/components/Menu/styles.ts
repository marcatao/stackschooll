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
    border-top: none;
    border-right: 3px solid ${props => props.theme.colors.primary};
  }

  background: ${props => props.theme.colors.background};

  > span,
  a {
    color: ${props => props.theme.colors.textTitle};
    font-weight: bold;
  }

  > svg {
    > path {
      fill: ${props => props.theme.colors.textTitle};
    }
  }
`;

export const MenuItem = styled.li<ItemSelectedProps>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 64px;

  padding-left: 1rem;

  transition: background 0.3s, color 0.3s, font-weight 0.3s;
  cursor: pointer;

  border-top: 0.1rem solid ${props => props.theme.colors.background};

  > svg {
    width: 50%;
    height: 50%;

    max-width: 80px;
    max-height: 32px;

    > path {
      fill: ${props => props.theme.colors.textBase};
    }
  }

  > span,
  a {
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.textBase};

    width: 100%;
    height: 100%;
  }

  &:hover {
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

  ${props => props.selected && itemSelectedStyle};

  @media (min-width: 501px) {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    height: 100px;

    padding: 0;

    > span,
    a {
      display: flex;
      justify-content: center;
      align-items: center;

      max-width: 100px;
      max-height: 32px;
    }
  }

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;
  }
`;
