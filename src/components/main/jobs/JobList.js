import React from "react";
import { StyledJobList } from "../../../styles/components/main/jobs";
import JobItem from "./JobItem";

const JobList = () => {
  //demo
  const jobs = [
    {
      id: 1,
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/35653573-d7f2-4489-94ea-ce446ecdf465",
      created_at: "Mon Nov 16 13:48:54 UTC 2020",
      company: "Localist",
      company_url: "https://www.localist.com",
      location: "San Francisco, CA",
      title: "Full Stack Ruby Developer",
      description:
        "<h1>Description</h1>\n<p>Humans are born for connection</p>\n<p>Localist is <strong>built to connect</strong></p>\n<p>Localist is a first of its kind community event platform for brands. Our mission is to help organizations leverage the power of events to spark ideas and spur movements...",
      how_to_apply:
        '<p>Apply at <a href="https://apply.workable.com/localist/j/F658FD35BE/">https://apply.workable.com/localist/j/F658FD35BE/</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcktPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a432bd0282ef2a2b2899e84d03e53c31cb31f02e/localist-logo(1).png",
    },
    {
      id: 2,
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/35653573-d7f2-4489-94ea-ce446ecdf465",
      created_at: "Mon Nov 16 13:48:54 UTC 2020",
      company: "Kasisto",
      company_url: "https://www.localist.com",
      location: "San Francisco, CA",
      title: "Full Stack Ruby Developer",
      description:
        "<h1>Description</h1>\n<p>Humans are born for connection</p>\n<p>Localist is <strong>built to connect</strong></p>\n<p>Localist is a first of its kind community event platform for brands. Our mission is to help organizations leverage the power of events to spark ideas and spur movements...",
      how_to_apply:
        '<p>Apply at <a href="https://apply.workable.com/localist/j/F658FD35BE/">https://apply.workable.com/localist/j/F658FD35BE/</a></p>\n',
      company_logo:
        "https://github-jobs.s3.amazonaws.com/nqvPjEiTvQQWiYjWfz9hkLdU?response-content-disposition=inline%3B%20filename%3D%22Gemini%20logo.png%22%3B%20filename%2A%3DUTF-8%27%27Gemini%2520logo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJENXOYUQN2IQEWRA%2F20201120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20201120T104054Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=72d025872ab5456cee001e5de201682db31ec65411f0964bb5b5e4e3504136d1",
    },
    {
      id: 3,
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/35653573-d7f2-4489-94ea-ce446ecdf465",
      created_at: "Mon Nov 16 13:48:54 UTC 2020",
      company: "Kasisto",
      company_url: "https://www.localist.com",
      location: "San Francisco, CA",
      title: "Full Stack Ruby Developer",
      description:
        "<h1>Description</h1>\n<p>Humans are born for connection</p>\n<p>Localist is <strong>built to connect</strong></p>\n<p>Localist is a first of its kind community event platform for brands. Our mission is to help organizations leverage the power of events to spark ideas and spur movements...",
      how_to_apply:
        '<p>Apply at <a href="https://apply.workable.com/localist/j/F658FD35BE/">https://apply.workable.com/localist/j/F658FD35BE/</a></p>\n',
      company_logo:
        "https://github-jobs.s3.amazonaws.com/dK1PqJrxJU4VgbiUn5bWuvam?response-content-disposition=inline%3B%20filename%3D%22Nisum%20logo.png%22%3B%20filename%2A%3DUTF-8%27%27Nisum%2520logo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJENXOYUQN2IQEWRA%2F20201120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20201120T104017Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=98587a249826b54a35d50ea0b72162ea40e792a8131d08e342eb5068c5890998",
    },
    {
      id: 4,
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/35653573-d7f2-4489-94ea-ce446ecdf465",
      created_at: "Mon Nov 16 13:48:54 UTC 2020",
      company: "Localist",
      company_url: "https://www.localist.com",
      location: "Remote",
      title: "Full Stack Ruby Developer",
      description:
        "<h1>Description</h1>\n<p>Humans are born for connection</p>\n<p>Localist is <strong>built to connect</strong></p>\n<p>Localist is a first of its kind community event platform for brands. Our mission is to help organizations leverage the power of events to spark ideas and spur movements...",
      how_to_apply:
        '<p>Apply at <a href="https://apply.workable.com/localist/j/F658FD35BE/">https://apply.workable.com/localist/j/F658FD35BE/</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTZOIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b12ef9750edce3752e39d7a9dd553be726bd560d/Best_LS_Logo.png",
    },
  ];

  return (
    <StyledJobList>
      <ul>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>
    </StyledJobList>
  );
};

export default JobList;
