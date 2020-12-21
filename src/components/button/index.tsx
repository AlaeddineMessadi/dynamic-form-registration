import React from "react";
import "./style.scss";

interface IPropsButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

export const Button: React.FC<IPropsButton> = ({
  text,
  onClick: handleOnClickChange,
}) => {
  const selectId: string = `${text?.toLowerCase()}-select`;

  return <button onClick={handleOnClickChange}>{text}</button>;
};
