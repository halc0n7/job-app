import React from "react";
import { Link } from "react-router-dom";

const JobItem = ({ job }) => {
  return (
    <li>
      <Link to={`/job/${job}`}>{job}</Link>
    </li>
  );
};

export default JobItem;
