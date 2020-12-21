import React from "react";
import "./style.scss";

import { Button } from "../index";

interface IPropsButtonsControl {
  children?: JSX.Element | JSX.Element[];
}

export const ButtonsControl: React.FC<IPropsButtonsControl> = ({
  children,
}) => {
  return (
    <div className="buttons-control">
      <Button
        onClick={() => {
          alert("hello");
        }}
        text="Previous"
      />
      <Button
        onClick={() => {
          alert("hello");
        }}
        text="Next"
      />
      {children}
    </div>
  );
};
