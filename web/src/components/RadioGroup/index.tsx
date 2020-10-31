import React, { useState } from "react";

import { RadioGroupWrapper } from "./styles";

import { RadioField, RadioProps } from "../RadioField";

export interface RadioGroupProps {
  properties: RadioProps[];
  onChange?: (name: string, value: boolean, description?: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  properties,
  onChange
}): JSX.Element => {
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

  const handleChangeValue = (
    name: string,
    description: string,
    value: boolean
  ) => {
    if (onChange) {
      onChange(name, value, description);
    }

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
            onClick={() =>
              handleChangeValue(radio.name, radio.description, !radio.value)
            }
          />
        );
      })}
    </RadioGroupWrapper>
  );
};

export { RadioGroup };
