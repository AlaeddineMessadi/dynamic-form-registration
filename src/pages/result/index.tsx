import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

import { IAppState } from "../../common/types";
import { Link } from "react-router-dom";

interface IPropsResult {}

const ResultPage: React.FC<IPropsResult> = () => {
  const data = useSelector((state: IAppState) => state.data);

  return (
    <section className="container">
      <div className="result">
        <h1>Thank you for registering</h1>
        <p className="segment result-row">
          <label className="name">name</label>
          <label className="value">value is</label>
        </p>
        <Link to="/">Registration</Link>
      </div>
    </section>
  );
};

export default ResultPage;
