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

import LogoStackSchoolSVG from "../../assets/images/logostackschool.svg";
import LogoSVG from "../../assets/images/stackschool.svg";

const Dashboard = (): JSX.Element => {
  return (
    <DashaboardPageContent>
      <LogoWrapper>
        <LogoStackSchoolSVG />
      </LogoWrapper>
      <HeaderWrapper>
        <LogoSVG />
        <h2>Plataforma de saída de alunos.</h2>
      </HeaderWrapper>
      <ProfileWrapper>
        <Avatar name="Anderson Gomes" />
        <SignOut />
      </ProfileWrapper>
      <SideWrapper />
      <MainWrapper />
    </DashaboardPageContent>
  );
};

export { Dashboard };
