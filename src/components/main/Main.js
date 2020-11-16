import React from "react";
import StyledContainer from "../../styles/components/main";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import JobList from "./jobs/JobList";
import Location from "./location/Location";
import Search from "./search/Search";

const Main = () => {
  return (
    <StyledContainer>
      <Header />

      <Search />

      <Location />

      <JobList />

      <Footer />
    </StyledContainer>
  );
};

export default Main;
