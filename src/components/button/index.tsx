import React from "react";
import "./style.scss";

interface IPropsButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
  disabled?: boolean;
}

export const Button: React.FC<IPropsButton> = ({
  text,
  disabled,
  onClick: handleOnClickChange,
}) => {
  console.log(disabled);
  return (
    <button onClick={handleOnClickChange} disabled={disabled}>
      {text}
    </button>
  );
};
