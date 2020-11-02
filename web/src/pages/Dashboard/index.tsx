import React from "react";

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

import LogoStackSchoolSVG from "../../assets/images/logostackschool.svg";
import LogoSVG from "../../assets/images/stackschool.svg";

import CheckNotificationSVG from "../../assets/images/icons/check-notification-svg.svg";
import UserParentSVG from "../../assets/images/icons/user-parent-svg.svg";
import StudentSVG from "../../assets/images/icons/students-svg.svg";

const Dashboard = (): JSX.Element => {
  const items: MenuItemProps[] = [
    {
      name: "notification",
      title: "Notificações",
      icon: <CheckNotificationSVG />
    },
    { name: "parents", title: "Responsáveis", icon: <UserParentSVG /> },
    { name: "students", title: "Alunos", icon: <StudentSVG /> }
  ];

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
        <Avatar name="Anderson Gomes" />
        <SignOut />
      </ProfileWrapper>

      <SideWrapper>
        <Menu menu={items} />
      </SideWrapper>

      <MainWrapper>
        <Title>Notificações</Title>
      </MainWrapper>
    </DashaboardPageContent>
  );
};

export { Dashboard };
