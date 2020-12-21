import React from "react";
import "./style.scss";

interface IPropsButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

export const Slider: React.FC<IPropsButton> = ({
  text,
  onClick: handleOnClickChange,
}) => {
  const selectId: string = `${text?.toLowerCase()}-select`;

  return (
    <div className="carousel-container">
      <div className="carousel my-carousel carousel--translate">
        <input
          className="carousel__activator"
          type="radio"
          name="carousel"
          id="F"
        />
        <input
          className="carousel__activator"
          type="radio"
          name="carousel"
          id="G"
          checked
        />

        <div className="carousel__track">
          <li className="carousel__slide">
            <h1>F</h1>
          </li>
          <li className="carousel__slide">
            <h1>G</h1>
          </li>
        </div>
        <div className="carousel__indicators">
          <label className="carousel__indicator" htmlFor="F"></label>
          <label className="carousel__indicator" htmlFor="G"></label>
        </div>
      </div>
    </div>
  );
};
