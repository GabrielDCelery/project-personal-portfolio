import React from 'react';

import { Box, Card, Divider, Grid, Icon } from '@material-ui/core';
import mysql from 'assets/mysql.svg';

export const SkillCard = props => {
  return (
    <Card>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Box padding="1em">
            <img src={mysql} style={{ height: '100%' }} />
          </Box>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={8}>
          <Box padding="2em">s</Box>
        </Grid>
      </Grid>
    </Card>
  );
};
