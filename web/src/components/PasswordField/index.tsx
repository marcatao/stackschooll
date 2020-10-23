import React, { useState } from "react";

import PasswordShow from "../../assets/images/icons/eye.svg";
import PasswordHide from "../../assets/images/icons/eye-slash.svg";

import { InputProps, InputField } from "../InputField";

export type PasswordProps = InputProps;

export interface ConfigProps {
  show: boolean;
  type: "text" | "password";
}

const PasswordField: React.FC<PasswordProps> = (props): JSX.Element => {
  const [config, setConfig] = useState<ConfigProps>({
    show: false,
    type: "password"
  });

  const PasswordIcon = (): JSX.Element => (
    <div
      onClick={() =>
        setConfig({
          ...config,
          type: config.show ? "password" : "text",
          show: !config.show
        })
      }
    >
      {config.show ? <PasswordHide /> : <PasswordShow />}
    </div>
  );

  return (
    <InputField
      type={config.type}
      autoComplete="current-password"
      icon={<PasswordIcon />}
      {...props}
    />
  );
};

export { PasswordField };
