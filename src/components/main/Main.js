import React from "react";
import Footer from "../footer/Footer";
import JobList from "./jobs/JobList";
import Location from "./search/Location";
import Search from "./search/Search";

const Main = () => {
  return (
    <div>
      <Search />

      <Location />

      <JobList />

      <Footer />
    </div>
  );
};

export default Main;
