import React from "react";
import {
  Typography
} from "@material-ui/core";
import styled from 'styled-components';

const StyledTypography = styled.div`
  background: #082431;
  padding: 1rem !important;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const Heading = ({
  children
}) => {
  return (
    <StyledTypography component="div">{children}</StyledTypography>
  );
}