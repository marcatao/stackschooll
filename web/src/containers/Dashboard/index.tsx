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

import CheckNotificationSVG from "../../assets/images/icons/check-notification-svg.svg";
import UserParentSVG from "../../assets/images/icons/user-parent-svg.svg";
import StudentSVG from "../../assets/images/icons/students-svg.svg";
import HomeSVG from "../../assets/images/icons/home-icon-svg.svg";

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
  const { onLogout, user } = useAuth();

  const [items] = useState<MenuItemProps[]>([
    {
      name: "home",
      title: "Início",
      link: "/dashboard",
      selected: true,
      icon: <HomeSVG />
    },
    {
      name: "notifications",
      title: "Notificações",
      link: "/dashboard/notifications",
      selected: false,
      icon: <CheckNotificationSVG />
    },
    {
      name: "parents",
      title: "Responsáveis",
      link: "/dashboard/parents",
      selected: false,
      icon: <UserParentSVG />
    },
    {
      name: "students",
      title: "Alunos",
      link: "/dashboard/students",
      selected: false,
      icon: <StudentSVG />
    }
  ]);

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
        <Menu items={items} onSelected={item => setTitle(item.title)} />
      </SideWrapper>

      <MainWrapper>
        <Title>{title}</Title>

        {children}
      </MainWrapper>
    </DashaboardPageContent>
  );
};

export default Dashboard;
