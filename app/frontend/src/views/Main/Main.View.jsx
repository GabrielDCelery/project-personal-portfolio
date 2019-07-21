import React from 'react';
import {
  Grid
} from '@material-ui/core';
import { RotatingCube } from './subViews';

export default ({
  StyledContainer,
  StyledGridItem
}) => {
  return (
    <React.Fragment>
      <StyledContainer maxWidth={false}>
        <Grid container>
          <StyledGridItem item md={12}>
            <RotatingCube />
          </StyledGridItem>
        </Grid>
      </StyledContainer>
    </React.Fragment>
  );
}