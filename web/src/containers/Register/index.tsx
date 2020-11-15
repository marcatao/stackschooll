import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  RegisterPageContent,
  LogoContainer,
  Banner,
  BannerSection,
  FormSection,
  ContentSection,
  Header
} from "./styles";

import LogoSVG from "../../assets/images/stackschool.svg";

import { Title } from "../../components/Title";
import { Label } from "../../components/Label";
import { InputField } from "../../components/InputField";
import { PasswordField } from "../../components/PasswordField";
import { RadioGroup } from "../../components/RadioGroup";
import { Button } from "../../components/Button";
import { BackTo } from "../../components/BackTo";

import { Profile } from "../../model/profile";
import { api } from "../../services/api";

const Register: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [userProfile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    password: "",
    profile: "escola",
    cpfcnpj: "111.111.999-55",
    username: "",
    address: "Rua: Almada,588 jardim santo alberto Santo andré"
  });

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const {
        name,
        email,
        password,
        profile,
        cpfcnpj,
        username,
        address
      } = userProfile;

      const information = {
        cpf_cnpj: cpfcnpj,
        user_name: username,
        name,
        email,
        profile,
        password,
        address
      };

      const response = await api.post("api/register", information, {
        headers: {
          accept: "application/json"
        }
      });

      if (response.data) {
        await router.push("/success");
      }
    } catch (error) {
      alert(error);
    }
  };

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
      <FormSection onSubmit={handleSubmitRegister}>
        <ContentSection>
          <Header>
            <BackTo link="/" />
          </Header>

          <div>
            <Title>Cadastro</Title>
            <Label>Preencha os dados abaixo para começar.</Label>
          </div>

          <fieldset>
            <InputField
              name="name"
              label="Nome"
              maxLength={50}
              onChange={e =>
                setProfile({ ...userProfile, name: e.target.value })
              }
            />

            <InputField
              name="email"
              label="E-mail"
              autoComplete="email"
              maxLength={50}
              onChange={e =>
                setProfile({
                  ...userProfile,
                  email: e.target.value,
                  username: e.target.value
                })
              }
            />

            <PasswordField
              name="senha"
              label="Senha"
              maxLength={50}
              onChange={e =>
                setProfile({ ...userProfile, password: e.target.value })
              }
            />
          </fieldset>

          <fieldset>
            <Label>Qual o perfil do usuário.</Label>
            <RadioGroup
              properties={[
                { name: "escola", description: "Escola", value: true },
                {
                  name: "responsavel",
                  description: "Responsável",
                  value: false
                }
              ]}
              onChange={(name, value) => {
                if (value) {
                  setProfile({ ...userProfile, profile: name });
                }
              }}
            />
          </fieldset>

          <Button button="submit" name="register">
            Concluir Cadastro
          </Button>
        </ContentSection>
      </FormSection>
    </RegisterPageContent>
  );
};

export { Register };
