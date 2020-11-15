import React, { useState } from "react";
import { useRouter } from "next/router";
import { FormSection, ContentSection, ProfileWrapper } from "./styles";

import { Label } from "../../components/Label";
import { InputField } from "../../components/InputField";
import { PasswordField } from "../../components/PasswordField";
import { Button } from "../../components/Button";

import { InputMask } from "../../components/InputMask";

import { Profile } from "../../model/profile";
import { api } from "../../services/api";

const ProfileForm = (): JSX.Element => {
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
    <ProfileWrapper>
      <FormSection onSubmit={handleSubmitRegister}>
        <ContentSection>
          <div>
            <Label>Seus dados</Label>
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

            <InputMask
              name="cpfCnpj"
              label="CPF/CNPJ"
              mask="99.999.999-99"
              maskChar=""
              maxLength={20}
              onChange={e =>
                setProfile({
                  ...userProfile,
                  cpfcnpj: e.target.value
                })
              }
            />
          </fieldset>

          <Button button="submit" name="register">
            Atualizar Cadastro
          </Button>
        </ContentSection>
      </FormSection>
    </ProfileWrapper>
  );
};

export { ProfileForm };
