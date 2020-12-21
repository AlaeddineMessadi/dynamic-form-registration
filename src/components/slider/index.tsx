import React from "react";
import "./style.scss";

interface SliderOption {
  content: JSX.Element | JSX.Element[];
  id: string | number;
}
interface ISliderButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  sliders: SliderOption[];
  name: string;
  step: number;
}

export const Slider: React.FC<ISliderButton> = ({
  sliders,
  name,
  onClick: handleOnClickChange,
  step,
}) => {
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
              {elm.content}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
