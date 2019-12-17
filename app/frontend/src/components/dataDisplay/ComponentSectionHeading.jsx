import React from 'react';
//import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import config from 'config';

export const ComponentSectionHeading = props => {
  const { label, bgColor, labelColor, fontSize } = props;

  const style = {};

  if (fontSize) {
    style['fontSize'] = fontSize;
  }

  return (
    <Box
      bgcolor={bgColor || config.styles.colors.primary}
      color={labelColor || config.styles.colors.darkBgText}
      px="2em"
      py="1em"
      width="100%"
    >
      <Typography paragraph={true} style={{ margin: 0, ...style }}>
        {(label || '').toUpperCase()}
      </Typography>
    </Box>
  );
};
