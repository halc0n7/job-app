import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import JobList from "../../components/Main/jobs/JobList";
import Location from "../../components/Main/location/Location";
import Search from "../../components/Main/search/Search";
import { mixins } from "../../styles";

const StyledContainer = styled.div`
  //1024px
  /* ${mixins.flexBetween} */
`;
const Main = () => {
  return (
    <>
      <Header />

      <Search />

      <StyledContainer>
        <Location />

        <JobList />
      </StyledContainer>

      <Footer />
    </>
  );
};

export default Main;
