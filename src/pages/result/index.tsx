import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

import { IAppState } from "../../common/types";
import { Link } from "react-router-dom";

interface IPropsResult {}

const ResultPage: React.FC<IPropsResult> = () => {
  const data = useSelector((state: IAppState) => state.data);

  const isDataEmpty = Object.keys(data).length === 0;
  return (
    <section className="container">
      <div className="result">
        {isDataEmpty ? (
          <>
            <h1>You need to register first</h1>
            <Link to="/">Register</Link>
          </>
        ) : (
          <>
            <h1>Thank you for registering</h1>
            {Object.keys(data).map((key, index) => (
              <p className="segment result-row">
                <label className="name">{key}</label>
                <label className="value">{data[key]}</label>
              </p>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default ResultPage;
