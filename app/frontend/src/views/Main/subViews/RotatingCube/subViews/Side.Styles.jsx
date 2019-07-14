import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

const StyledCell = styled.div`
  width: 50%;
  height: 100%;
  background: none;
  //box-shadow: 0 0 5vh 1px rgba(70,185,244, .9) inset;
  border: 1px solid;
  flex: 1;
  transition: all 500ms;
`;

export default ToWrapComponent => {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
        {...{
          StyledRow,
          StyledCell
        }}
      />
    )
  }

  return WrapperComponent;
}