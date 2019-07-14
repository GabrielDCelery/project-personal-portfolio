import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Grid
} from '@material-ui/core';

export default ToWrapComponent => {
  const StyledContainer = styled(Container)`
    padding: 0 !important;
  `;

  const StyledGridItem = styled(Grid)`
    height: 100vh;
    //background-color: #082431;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow:hidden;
  `;

  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
        {...{
          StyledContainer,
          StyledGridItem
        }}
      />
    )
  }

  return WrapperComponent;
}