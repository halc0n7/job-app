import React from "react";
import JobItem from "./JobItem";

const JobList = () => {
  const jobs = ["job1", "job2", "job3", "job4"];

  return (
    <div>
      <ul>
        {jobs.map((job, i) => (
          <JobItem key={i} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default JobList;
