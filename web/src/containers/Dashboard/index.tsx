import React, { useState } from "react";

import { useRouter } from "next/router";

import {
  DashaboardPageContent,
  LogoWrapper,
  HeaderWrapper,
  ProfileWrapper,
  SideWrapper,
  MainWrapper
} from "./styles";

import { SignOut } from "../../components/SignOut";
import { Avatar } from "../../components/Avatar";
import { Label } from "../../components/Label";
import { Title } from "../../components/Title";

import { Menu, MenuItemProps } from "../../components/Menu";

import { getRouteFromPathname } from "../../utils";

import LogoStackSchoolSVG from "../../assets/images/logostackschool.svg";
import LogoSVG from "../../assets/images/stackschool.svg";

import { useAuth } from "../../contexts/auth";

export const getTitleFromItems = (
  items: MenuItemProps[],
  target: string
): string => {
  let title = "";

  items.forEach((item: MenuItemProps) => {
    const route = getRouteFromPathname(item.link);

    if (route === target) {
      title = item.title;
    }
  });

  return title;
};

const Dashboard: React.FC = ({ children }): JSX.Element => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const { onLogout, user, menu, onSetMenu } = useAuth();

  const goProfile = () => {
    router.push("/dashboard/profile");
    setTitle("Meu Perfil");
  };

  return (
    <DashaboardPageContent>
      <LogoWrapper>
        <LogoStackSchoolSVG />
      </LogoWrapper>

      <HeaderWrapper>
        <LogoSVG />
        <Label>Plataforma de saída de alunos</Label>
      </HeaderWrapper>

      <ProfileWrapper>
        <Avatar
          name={user.name}
          image={user.profilePhotoUrl}
          profile={user.profile}
          onClick={goProfile}
        />
        <SignOut title="Sair" onClick={onLogout} />
      </ProfileWrapper>

      <SideWrapper>
        <Menu
          items={menu}
          onSelected={(item, items) => {
            setTitle(item.title);
            onSetMenu(items);
          }}
        />
      </SideWrapper>

      <MainWrapper>
        <Title>{title}</Title>

        {children}
      </MainWrapper>
    </DashaboardPageContent>
  );
};

export default Dashboard;
