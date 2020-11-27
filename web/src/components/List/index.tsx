import React from "react";

import { Title } from "../Title";
import { Avatar } from "./Avatar";

import { ListWrapper, ItemsWrapper, HeaderList } from "./styles";

export interface ListProps {
  title: string;
  items?: string[];
}

const List: React.FC<ListProps> = ({ title, items }): JSX.Element => {
  return (
    <ListWrapper>
      <HeaderList>
        <Title>{title}</Title>
      </HeaderList>

      <ItemsWrapper>
        {items.map((item, i) => (
          <Avatar key={i} name={item} />
        ))}
      </ItemsWrapper>
    </ListWrapper>
  );
};

export { List };
