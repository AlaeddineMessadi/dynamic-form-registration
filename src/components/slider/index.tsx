import React from "react";
import { RadioButtonsGroup, TextInput } from "..";
import "./style.scss";

import { ItemOption } from "../../common/types";

interface ISliderProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  sliders: ItemOption[];
  name: string;
  step: number;
}

export const Slider: React.FC<ISliderProps> = ({
  sliders,
  name,
  onClick: handleOnClickChange,
  step,
}) => {
  const getFormElement = (item: ItemOption) => {
    const { name, type, label, required } = item;

    if (type === "text" || type === "email") {
      return (
        <TextInput name={name} type={type} label={label} required={required} />
      );
    }

    if (type === "radio") {
      return (
        <RadioButtonsGroup
          name={name}
          label={label}
          options={item.options || []}
          required={required}
        />
      );
    }
    return <p>Missing Form Element type</p>;
  };

  return (
    <div className="carousel-container">
      <div className="carousel my-carousel carousel--translate">
        {sliders.map((elm, index) => (
          <input
            key={index}
            id={index.toString()}
            className="carousel__activator"
            type="radio"
            name={name}
            checked={step === index}
            onChange={() => null}
          />
        ))}

        <div className="carousel__track">
          {sliders.map((elm, index) => (
            <li key={index} className="carousel__slide">
              {getFormElement(elm)}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
