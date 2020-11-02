import React, { useState, useEffect } from "react";
import Link from "next/link";

import { MenuWrapper, MenuItems, MenuItem, ItemSelectedProps } from "./styles";

import { Label } from "../Label";

export interface MenuItemProps extends ItemSelectedProps {
  name: string;
  title: string;
  link?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export interface MenuProps {
  items: MenuItemProps[];
  onSelected?: (item: MenuItemProps) => void;
}

const Item: React.FC<MenuItemProps> = ({
  name,
  title,
  selected,
  link,
  icon,
  onClick
}): JSX.Element => {
  const Icon = (): JSX.Element => <>{icon}</>;

  return (
    <MenuItem
      onClick={() => {
        if (onClick) onClick();
      }}
      selected={selected}
    >
      <Icon />
      <Label>
        <Link href={""}>{title}</Link>
      </Label>
    </MenuItem>
  );
};

const Menu: React.FC<MenuProps> = ({ items, onSelected }): JSX.Element => {
  const [menu, setMenu] = useState<MenuProps>({ items });

  const handleItemClick = (itemClick: MenuItemProps) => {
    const values = menu.items.map((item: MenuItemProps) => {
      if (item.name === itemClick.name) {
        return { ...item, selected: true };
      } else {
        return {
          ...item,
          selected: false
        };
      }
    });

    setMenu({ items: values });
  };

  useEffect(() => {
    if (onSelected) {
      const lastItemSelected = menu.items.filter(item => item.selected);

      // get last item selected
      onSelected(lastItemSelected[0]);
    }
  }, [menu.items]);

  return (
    <MenuWrapper>
      <MenuItems>
        {menu.items.map((item: MenuItemProps, index) => {
          return (
            <Item key={index} {...item} onClick={() => handleItemClick(item)} />
          );
        })}
      </MenuItems>
    </MenuWrapper>
  );
};

export { Menu };
