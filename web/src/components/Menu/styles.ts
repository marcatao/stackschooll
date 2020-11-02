import styled from "styled-components";

export const MenuWrapper = styled.menu`
  display: flex;

  width: 100%;
  height: 100%;
`;

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 10rem;

  > li:last-child {
    border-bottom: 0.1rem solid ${props => props.theme.colors.background};
  }
`;

export const MenuItem = styled.li`
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
    border-right: 3px solid ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.background};

    > span,
    a {
      // color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.textTitle};
      font-weight: bold;
    }

    > svg {
      > path {
        // fill: ${props => props.theme.colors.primary};
        fill: ${props => props.theme.colors.textTitle};
      }
    }
  }
`;
