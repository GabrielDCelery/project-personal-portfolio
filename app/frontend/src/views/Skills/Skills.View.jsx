import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { ComponentLeftAlignedContainer, SkillCard } from 'components';

export default function SkillsView({ getter, handler }) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <SkillCard />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SkillCard />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SkillCard />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SkillCard />
          </Grid>
        </Grid>
      </ComponentLeftAlignedContainer>
    </React.Fragment>
  );
}
