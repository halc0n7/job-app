import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Job from "../pages/Job/Job";
import styled from "styled-components";
import Main from "../pages/Main/Main";

const StyledContainer = styled.div`
  padding: 12px;
`;

const MainRouter = () => {
  return (
    <Router>
      <StyledContainer>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/job/:id" component={Job} />
          <Redirect to="/" />
        </Switch>
      </StyledContainer>
    </Router>
  );
};

export default MainRouter;
