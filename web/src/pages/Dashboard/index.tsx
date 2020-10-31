import React from "react";

import {
  DashaboardPageContent,
  LogoWrapper,
  HeaderWrapper,
  ProfileWrapper,
  SideWrapper,
  MainWrapper
} from "./styles";

const Dashboard = (): JSX.Element => {
  return (
    <DashaboardPageContent>
      <LogoWrapper />
      <HeaderWrapper>
        <h2>Welcome to dashboard</h2>
      </HeaderWrapper>
      <ProfileWrapper />
      <SideWrapper />
      <MainWrapper />
    </DashaboardPageContent>
  );
};

export { Dashboard };
