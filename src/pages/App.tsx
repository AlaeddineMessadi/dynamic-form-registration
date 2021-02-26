import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResultPage from "./result";
import RegistrationPage from "./registration";
import { useDispatch } from "react-redux";
import { setWidthAction } from "../store/actions";
import useWidth from "../hooks/useWidth";

interface IPropsApp {}

const App: React.FC<IPropsApp> = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={RegistrationPage} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
