import React from "react";
import { RadioButtonsGroup, TextInput } from "..";
import "./style.scss";

import { IAppState, ItemOption } from "../../common/types";
import { useSelector } from "react-redux";
interface ISliderProps {
  sliders: ItemOption[];
  name: string;
  step: number;
}

export const Slider: React.FC<ISliderProps> = ({ sliders, name, step }) => {
  const containerWidth = useSelector((state: IAppState) => state.width);

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

  // todo width

  return (
    <div
      className="carousel-container"
      style={{ width: `${containerWidth - 100}px` }}
    >
      <div
        className="carousel my-carousel carousel--translate"
        style={{ width: `${containerWidth - 120}px` }}
      >
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

        <ul
          className="carousel__track"
          style={{ width: `${containerWidth - 120}px` }}
        >
          {sliders.map((elm, index) => (
            <li
              key={index}
              className="carousel__slide"
              style={{ minWidth: `${containerWidth - 120}px` }}
            >
              {getFormElement(elm)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
