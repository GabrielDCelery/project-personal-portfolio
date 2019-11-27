import React from 'react';

import { Box, Card, Divider, Grid, Icon, Typography } from '@material-ui/core';
import { SizeMe } from 'react-sizeme';

export const SkillCard = props => {
  const { iconSrc, label, cardBgColor, iconBorderColor } = props;

  return (
    <Card
      style={{
        backgroundColor: cardBgColor
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Box padding="1em">
            <SizeMe>
              {({ size }) => {
                return (
                  <Box
                    style={{
                      borderRadius: '50%',
                      border: `3px solid ${iconBorderColor}`,
                      width: '100%',
                      height: size.width
                    }}
                  >
                    <img src={iconSrc} style={{ width: '100%' }} />
                  </Box>
                );
              }}
            </SizeMe>
          </Box>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={8}>
          <Box padding="2em">
            <Typography variant="h6" style={{ color: '#6e6959' }}>
              {(label || '').toUpperCase()}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
