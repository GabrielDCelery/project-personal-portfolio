import React from "react";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from "@material-ui/icons";
import styled from 'styled-components';

const StyledIconWrapper = styled.div`
  align-items: center;
  background-color: #ccc;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
  z-index: 1;
`;

export const StepIcon = ({
  isActive,
  onClick
}) => {
  const style = isActive ? {
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    backgroundImage: "linear-gradient(135deg, rgba(249,235,235,1) 0%, rgba(231,214,169,1) 12%, rgba(223,182,93,1) 27%, rgba(222,129,67,1) 41%, rgba(209,101,38,1) 55%, rgba(166,9,9,1) 100%)",
  } : null;

  return (
    <StyledIconWrapper
      style={style}
      onClick={onClick}
    >
      {isActive ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </StyledIconWrapper>
  );
}