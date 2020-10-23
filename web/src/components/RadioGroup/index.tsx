import React, { useState, useEffect } from "react";

import { RadioGroupWrapper } from "./styles";

import { RadioField, RadioProps } from "../RadioField";

export interface RadioGroupProps {
  properties: RadioProps[];
}

// const RadioElement: React.FC<RadioProps> = (props): JSX.Element => {
//   return <RadioField {...props} />;
// };

const RadioGroup: React.FC<RadioGroupProps> = ({ properties }): JSX.Element => {
  const [radios, setRadios] = useState<RadioGroupProps>({ properties });

  const changeGroupRadioValue = (description: string, value: boolean) => {
    const values = radios.properties.map((radio: RadioProps) => {
      if (radio.description !== description) {
        return { ...radio, value: false };
      } else {
        return {
          ...radio,
          value
        };
      }
    });

    setRadios({ properties: values });
  };

  const handleChangeValue = (description: string, value: boolean) => {
    changeGroupRadioValue(description, value);
  };

  return (
    <RadioGroupWrapper>
      {radios.properties.map((radio: RadioProps) => {
        return (
          <RadioField
            key={radio.name}
            name={radio.name}
            description={radio.description}
            value={radio.value}
            onClick={() => handleChangeValue(radio.description, !radio.value)}
          />
        );
      })}
    </RadioGroupWrapper>
  );
};

export { RadioGroup };
