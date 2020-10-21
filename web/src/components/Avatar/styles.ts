import styled from "styled-components";

export const AvatarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 40px;
    height: 40px;

    background: ${props => props.theme.colors.boxBase};

    border-radius: 50%;
  }

  > span {
    font-size: 1.4rem;
    line-height: 3.1rem;
    color: ${props => props.theme.colors.titlePrimary};

    margin: 1rem 1rem;
  }
`;
