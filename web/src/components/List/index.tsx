import React from "react";

import { Title } from "../Title";
import { Avatar } from "./Avatar";
import { Button } from "../Button";

import { ListWrapper, ItemsWrapper, HeaderList, Item } from "./styles";

export interface ListProps {
  title: string;
  items?: string[];
  show?: boolean;
}

interface ItemProps {
  item: string;
}

const List: React.FC<ListProps> = ({ title, items, show }): JSX.Element => {
  const ListItem: React.FC<ItemProps> = ({ item }) => {
    return (
      <Item>
        <Avatar name={item} />
        {show && <Button name="notification">Notificar Escola</Button>}
      </Item>
    );
  };

  return (
    <ListWrapper>
      <HeaderList>
        <Title>{title}</Title>
      </HeaderList>

      <ItemsWrapper>
        {items.map((item, i) => (
          <ListItem item={item} key={i} />
        ))}
      </ItemsWrapper>
    </ListWrapper>
  );
};

export { List };
