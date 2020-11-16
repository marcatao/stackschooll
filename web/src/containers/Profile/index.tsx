import React, { useState } from "react";
import { FormSection, ContentSection, ProfileWrapper } from "./styles";

import { Label } from "../../components/Label";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { Avatar } from "./Avatar";

import { InputMask } from "../../components/InputMask";

import { useAuth } from "../../contexts/auth";
import { Profile } from "../../model/profile";
import { getMaskIdentification, getLabelIdentification } from "../../utils";

const ProfileForm = (): JSX.Element => {
  const { user } = useAuth();

  const [userProfile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    password: "",
    username: "",
    profile: "escola",
    cpfcnpj: "99.999.999/9999-99",
    address: "Rua: Almada,588 jardim santo alberto Santo andré",
    profilePhotoUrl: ""
  });

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ProfileWrapper>
      <FormSection onSubmit={handleSubmitRegister}>
        <ContentSection>
          <div>
            <Label>Seus dados</Label>
            <Avatar
              name={user.name}
              profile={user.profile}
              email={user.email}
            />
          </div>

          <fieldset>
            <InputField
              name="name"
              label="Nome"
              defaultValue={user.name}
              maxLength={50}
              onChange={e =>
                setProfile({ ...userProfile, name: e.target.value })
              }
            />

            <InputMask
              name="cpfCnpj"
              defaultValue={user.cpfcnpj}
              label={getLabelIdentification(user.profile)}
              mask={getMaskIdentification(user.profile)}
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
