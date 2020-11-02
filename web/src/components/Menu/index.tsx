import React from "react";
import Link from "next/link";

import { MenuWrapper, MenuItems, MenuItem } from "./styles";

import { Label } from "../Label";

export interface MenuItemProps {
  name: string;
  title: string;
  link?: string;
  icon?: JSX.Element;
}

export interface MenuProps {
  menu: MenuItemProps[];
}

const Item: React.FC<MenuItemProps> = ({ title, link, icon }): JSX.Element => {
  const Icon = (): JSX.Element => <>{icon}</>;

  return (
    <MenuItem>
      <Icon />
      <Label>
        <Link href={""}>{title}</Link>
      </Label>
    </MenuItem>
  );
};

const Menu: React.FC<MenuProps> = ({ menu }): JSX.Element => {
  return (
    <MenuWrapper>
      <MenuItems>
        {menu.map((item: MenuItemProps, index) => {
          return <Item key={index} {...item} />;
        })}
      </MenuItems>
    </MenuWrapper>
  );
};

export { Menu };
