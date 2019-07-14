import React from 'react';

export default ({
  stateLightingOn,
  StyledRow,
  StyledCell
}) => {
  return (
    <React.Fragment>
      <StyledRow>
        <StyledCell style={{
          borderColor: stateLightingOn ? '#46B9F4' : '#082431',
          boxShadow: stateLightingOn ? '0 0 4vh 1px rgba(70,185,244, .9) inset': 'none'
        }} />
        <StyledCell style={{
          borderColor: stateLightingOn ? '#46B9F4' : '#082431',
          boxShadow: stateLightingOn ? '0 0 4vh 1px rgba(70,185,244, .9) inset': 'none'
        }} />
      </StyledRow>

      <StyledRow>
        <StyledCell style={{
          borderColor: stateLightingOn ? '#46B9F4' : '#082431',
          boxShadow: stateLightingOn ? '0 0 4vh 1px rgba(70,185,244, .9) inset': 'none'
        }} />
        <StyledCell style={{
          borderColor: stateLightingOn ? '#46B9F4' : '#082431',
          boxShadow: stateLightingOn ? '0 0 4vh 1px rgba(70,185,244, .9) inset': 'none'
        }} />
      </StyledRow>
    </React.Fragment>
  );
}