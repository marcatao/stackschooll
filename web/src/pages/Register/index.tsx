import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  RegisterPageContent,
  LogoContainer,
  Banner,
  BannerSection,
  Section,
  ContentSection
} from "./styles";

import LogoSVG from "../../assets/images/stackschool.svg";

import { Title } from "../../components/Title";
import { Label } from "../../components/Label";
import { InputField } from "../../components/InputField";
import { PasswordField } from "../../components/PasswordField";
import { RadioField } from "../../components/RadioField";
import { Button } from "../../components/Button";

const Register = (): JSX.Element => {
  const router = useRouter();

  const handleSubmitRegister = () => <></>;

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

      <form>
        <Section>
          <ContentSection>
            <div>
              <Title>Cadastro</Title>
              <Label>Preencha os dados abaixo para começar.</Label>
            </div>

            <fieldset>
              <InputField name="name" label="Nome" maxLength={50} />
              <InputField name="last" label="Sobrenome" maxLength={50} />

              <InputField
                name="email"
                label="E-mail"
                autoComplete="email"
                maxLength={50}
              />

              <PasswordField name="senha" label="Senha" maxLength={50} />
            </fieldset>

            <fieldset>
              <RadioField description="Escola" />
              {/* <RadioField description="Responsável" /> */}
            </fieldset>

            <Button name="register" onClick={handleSubmitRegister}>
              Concluir Cadastro
            </Button>
          </ContentSection>
        </Section>
      </form>
    </RegisterPageContent>
  );
};

export { Register };
