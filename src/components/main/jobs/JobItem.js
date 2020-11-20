import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  StyledJobItem,
  StyledCard,
  StyledContent,
  StyledImage,
  StyledDetails,
} from "../../../styles/components/main/jobs";
import { StyledPill, StyledSilverText } from "../../../styles/utils";

const StyledPillJobItem = styled(StyledPill)`
  margin-top: 12px;
  margin-bottom: 13px;
`;

const StyledSilverTextJobItem = styled(StyledSilverText)`
  margin-top: 13px;
  margin-bottom: 14px;
`;

const JobItem = ({
  job: { id, company, company_logo, created_at, location, title, type },
}) => {
  return (
    <StyledJobItem>
      <Link to={`/job/${id}`}>
        <StyledCard>
          <StyledImage src={company_logo} alt={`${company} logo`} />
          <StyledContent>
            <h4>{company}</h4>
            <h3>{title}</h3>
            <StyledPillJobItem>{type}</StyledPillJobItem>

            <StyledDetails>
              <StyledSilverTextJobItem>{location}</StyledSilverTextJobItem>
              <StyledSilverTextJobItem>{created_at}</StyledSilverTextJobItem>
            </StyledDetails>
          </StyledContent>
        </StyledCard>
      </Link>
    </StyledJobItem>
  );
};

export default JobItem;
