import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "../components/main/Main";
import Job from "../pages/Job";

const MainRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/job/:id" component={Job} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default MainRouter;
