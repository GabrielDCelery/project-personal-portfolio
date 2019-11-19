import React from 'react';
//import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import config from 'config';

export const ComponentExpansionPanelHeading = props => {
  const {
    labelFirst,
    labelSecond,
    labelThird,
    bgColor,
    labelColor,
    fontSize
  } = props;

  const style = {};

  if (fontSize) {
    style['fontSize'] = fontSize;
  }

  return (
    <Box
      bgcolor={bgColor || config.styles.colors.primary}
      color={labelColor || config.styles.colors.darkBgText}
      display="flex"
      flexDirection="row"
      width="100%"
      flexWrap="wrap"
    >
      {labelFirst ? (
        <Box flexGrow={1} style={{ flexBasis: 0 }}>
          <Typography paragraph={true} style={{ margin: 0, ...style }}>
            {labelFirst}
          </Typography>
        </Box>
      ) : null}

      {labelSecond ? (
        <Box flexGrow={1} style={{ flexBasis: 0 }}>
          <Typography paragraph={true} style={{ margin: 0, ...style }}>
            {labelSecond}
          </Typography>
        </Box>
      ) : null}

      {labelThird ? (
        <Box flexGrow={1} style={{ flexBasis: 0 }}>
          <Typography paragraph={true} style={{ margin: 0, ...style }}>
            {labelThird}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};
