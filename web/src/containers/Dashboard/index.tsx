import React, { useState } from "react";

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

import { Notification } from "../Dashboard/Notification";

const Dashboard = (): JSX.Element => {
  const [title, setTitle] = useState("Notificações");

  const items: MenuItemProps[] = [
    {
      name: "notification",
      title: "Notificações",
      selected: true,
      icon: <CheckNotificationSVG />
    },
    {
      name: "parents",
      title: "Responsáveis",
      selected: false,
      icon: <UserParentSVG />
    },
    { name: "students", title: "Alunos", selected: false, icon: <StudentSVG /> }
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
        <Menu items={items} onSelected={item => setTitle(item.title)} />
      </SideWrapper>

      <MainWrapper>
        <Title>{title}</Title>

        <Notification />
      </MainWrapper>
    </DashaboardPageContent>
  );
};

export { Dashboard };
