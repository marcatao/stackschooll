import React, { useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

import {
  LoginPageContent,
  LogoContainer,
  Banner,
  BannerSection,
  FormSection,
  ContentSection
} from "./styles";

import LogoSVG from "../../assets/images/stackschool.svg";

import { Title } from "../../components/Title";
import { Label } from "../../components/Label";
import { InputField } from "../../components/InputField";
import { PasswordField } from "../../components/PasswordField";
import { CheckBoxField } from "../../components/CheckBoxField";
import { Button } from "../../components/Button";

import { UserLogin } from "../../model/login";
// import { api } from "../../services/api";

import { useAuth } from "../../contexts/auth";

const Login = (): JSX.Element => {
  // const router = useRouter();
  const [login, setLogin] = useState<UserLogin>();

  const { onLogin } = useAuth();

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await onLogin(login);

    // try {
    //   const response = await api.post<string>("api/login", {
    //     ...login,
    //     device_name: "device_name"
    //   });

    //   if (response.data) {
    //     await router.push("/dashboard");
    //   }
    // } catch (error) {
    //   alert(error);
    // }
  };

  return (
    <LoginPageContent>
      <Banner>
        <BannerSection>
          <LogoContainer>
            <LogoSVG />
            <h2>Plataforma de saída de alunos.</h2>
          </LogoContainer>
        </BannerSection>
      </Banner>

      <FormSection onSubmit={handleSubmitLogin}>
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
              onChange={e => setLogin({ ...login, email: e.target.value })}
            />
            <PasswordField
              name="senha"
              label="Senha"
              maxLength={50}
              onChange={e => setLogin({ ...login, password: e.target.value })}
            />
          </fieldset>

          <div>
            <CheckBoxField description="Lembra-me" />
            <Label>
              <Link href="/recovery">Esqueci minha senha</Link>
            </Label>
          </div>

          <Button button="submit" name="login">
            Entrar
          </Button>
        </ContentSection>
      </FormSection>
    </LoginPageContent>
  );
};

export { Login };
