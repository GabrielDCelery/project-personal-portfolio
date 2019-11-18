import React from 'react';
//import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import config from 'config';

export const ComponentExpansionPanelHeading = props => {
  const { labelFirst, labelSecond, labelThird, bgColor, labelColor } = props;

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
          <Typography variant="h6">{labelFirst}</Typography>
        </Box>
      ) : null}

      {labelSecond ? (
        <Box flexGrow={1} style={{ flexBasis: 0 }}>
          <Typography variant="h6">{labelSecond}</Typography>
        </Box>
      ) : null}

      {labelThird ? (
        <Box flexGrow={1} style={{ flexBasis: 0 }}>
          <Typography variant="h6">{labelThird}</Typography>
        </Box>
      ) : null}
    </Box>
  );
};
