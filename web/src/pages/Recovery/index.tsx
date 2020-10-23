import React from "react";
import { useRouter } from "next/router";

import {
  RegisterPageContent,
  LogoContainer,
  Banner,
  BannerSection,
  Section,
  ContentSection,
  Header
} from "./styles";

import LogoSVG from "../../assets/images/stackschool.svg";

import { Title } from "../../components/Title";
import { Label } from "../../components/Label";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";

import { BackTo } from "../../components/BackTo";

const RecoveryPassword = (): JSX.Element => {
  const router = useRouter();

  const handleSubmitEmail = () => <></>;

  return (
    <RegisterPageContent>
      <Banner>
        <BannerSection>
          <LogoContainer>
            <LogoSVG />
            <h2>Plataforma de saída de alunos.</h2>
          </LogoContainer>
        </BannerSection>
      </Banner>
      <Section>
        <ContentSection>
          <Header>
            <BackTo link="/" />
          </Header>

          <div>
            <Title>Eita,esqueceu sua senha?</Title>
            <Label>Preencha seu e-mail de recuperação.</Label>
          </div>

          <fieldset>
            <InputField name="email" label="E-mail" maxLength={50} />
          </fieldset>

          <Button name="Enviar" onClick={handleSubmitEmail}>
            Enviar
          </Button>
        </ContentSection>
      </Section>
    </RegisterPageContent>
  );
};

export { RecoveryPassword };
