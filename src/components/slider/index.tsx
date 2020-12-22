import React from "react";
import { RadioButtonsGroup, TextInput } from "..";
import "./style.scss";

import { ItemOption } from "../../common/types";

interface ISliderProps {
  sliders: ItemOption[];
  name: string;
  step: number;
}

export const Slider: React.FC<ISliderProps> = ({ sliders, name, step }) => {
  const getFormElement = (item: ItemOption) => {
    const { name, type, label, required, options = [] } = item;

    if (type === "text" || type === "email" || type === "number") {
      return (
        <TextInput name={name} type={type} label={label} required={required} />
      );
    }

    if (type === "radio") {
      return (
        <RadioButtonsGroup
          name={name}
          label={label}
          options={options}
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

        <ul className="carousel__track">
          {sliders.map((elm, index) => (
            <li key={index} className="carousel__slide">
              {getFormElement(elm)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
