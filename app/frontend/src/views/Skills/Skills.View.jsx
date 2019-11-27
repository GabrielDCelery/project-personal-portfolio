import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { ComponentLeftAlignedContainer, SkillCard } from 'components';
import mysql from 'assets/mysql.svg';
import nodejs from 'assets/nodejs.svg';
import react from 'assets/react.svg';
import config from 'config';
import nodejsbw from 'assets/nodejsbw.svg';

export default function SkillsView({ getter, handler }) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <SkillCard
              iconSrc={mysql}
              label="MySQL"
              cardBgColor={config.styles.colors.tertiary}
              iconBorderColor={config.styles.colors.quaternary}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SkillCard
              iconSrc={nodejsbw}
              label="NodeJS"
              cardBgColor={config.styles.colors.tertiary}
              iconBorderColor={config.styles.colors.quaternary}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SkillCard
              iconSrc={react}
              label="ReactJS"
              cardBgColor={config.styles.colors.tertiary}
              iconBorderColor={config.styles.colors.quaternary}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SkillCard />
          </Grid>
        </Grid>
      </ComponentLeftAlignedContainer>
    </React.Fragment>
  );
}
