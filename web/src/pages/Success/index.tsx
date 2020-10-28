import React from "react";
import { useRouter } from "next/router";

import { Feedback } from "../../components/Feedback";

import { SuccessPageContent, Section, SectionWrapper } from "./styles";

const Success = (): JSX.Element => {
  const router = useRouter();

  const handleGoLogin = () => {
    router.push("/");
  };

  return (
    <SuccessPageContent>
      <Section>
        <SectionWrapper>
          <Feedback
            title="Cadastro concluído!"
            description="Agora você faz da plataforma StackSchool. Tenho uma ótima experiência."
            button="Fazer Login"
            onClick={handleGoLogin}
          />
        </SectionWrapper>
      </Section>
    </SuccessPageContent>
  );
};

export { Success };
