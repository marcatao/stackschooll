import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  LoginPageContent,
  LogoContainer,
  Banner,
  BannerSection,
  Section,
  ContentSection
} from "./styles";

import LogoSVG from "../../assets/images/stackschool.svg";
// import BackgroundSVG from "../../assets/images/background_1.svg";

import { Title } from "../../components/Title";
import { Label } from "../../components/Label";
import { InputField } from "../../components/InputField";
import { PasswordField } from "../../components/PasswordField";
import { CheckBoxField } from "../../components/CheckBoxField";
import { Button } from "../../components/Button";

const Login = (): JSX.Element => {
  const router = useRouter();

  const handleSubmitLogin = () => {
    router.push("/dashboard");
  };

  return (
    <LoginPageContent>
      <Banner>
        <BannerSection>
          {/* <BackgroundSVG /> */}

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
              <Title>Fazer Login</Title>
              <Label>
                Não tem conta ?{" "}
                <Label>
                  <Link href="/register">Cadastre-se</Link>
                </Label>
              </Label>
            </div>

            <fieldset>
              <InputField
                name="email"
                label="E-mail"
                autoComplete="email"
                maxLength={50}
              />
              <PasswordField name="senha" label="Senha" maxLength={50} />
            </fieldset>

            <div>
              <CheckBoxField description="Lembra-me" />
              <Label>
                <Link href="/recovery">Esqueci minha senha</Link>
              </Label>
            </div>

            <Button name="login" onClick={handleSubmitLogin}>
              Entrar
            </Button>
          </ContentSection>
        </Section>
      </form>
    </LoginPageContent>
  );
};

export { Login };
