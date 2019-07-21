import React from 'react';
import {
  Grid
} from '@material-ui/core';
import { Cube } from './subViews';

export default ({
  StyledContainer,
  StyledGridItem
}) => {
  return (
    <React.Fragment>
      <StyledContainer maxWidth={false}>
        <Grid container>
          <StyledGridItem item xs={12}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%'
            }}>
              <Cube
                startScale={1}
                startOffsetX={10}
                startOffsetY={15}
                startRotateX={-20}
                startRotateY={55}
                startZindex={3}
              />

              <Cube
                startScale={0.5}
                startOffsetX={25}
                startOffsetY={8}
                startRotateX={-10}
                startRotateY={-40}
                startZindex={2}
              />

              <Cube
                startScale={1}
                startOffsetX={80}
                startOffsetY={80}
                startRotateX={20}
                startRotateY={-55}
                startZindex={1}
              />
            </div>
          </StyledGridItem>
        </Grid>
      </StyledContainer>
    </React.Fragment>
  );
}