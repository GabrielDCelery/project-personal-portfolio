import React from 'react';
//import styled from 'styled-components';
import { Box, Hidden, Typography } from '@material-ui/core';
import config from 'config';

const renderLabels = ({ labelFirst, labelSecond, labelThird, style }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export const WorkHistoryExpansionPanelHeading = props => {
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
    <React.Fragment>
      <Hidden smDown>
        <Box
          bgcolor={bgColor || config.styles.colors.primary}
          color={labelColor || config.styles.colors.darkBgText}
          display="flex"
          flexDirection="row"
          width="100%"
          flexWrap="wrap"
        >
          {renderLabels({
            labelFirst,
            labelSecond,
            labelThird,
            style: { ...style }
          })}
        </Box>
      </Hidden>

      <Hidden mdUp>
        <Box
          bgcolor={bgColor || config.styles.colors.primary}
          color={labelColor || config.styles.colors.darkBgText}
          display="flex"
          flexDirection="column"
          width="100%"
          flexWrap="wrap"
        >
          {renderLabels({
            labelFirst,
            labelSecond,
            labelThird,
            style: { ...style, marginBottom: '0.5em' }
          })}
        </Box>
      </Hidden>
    </React.Fragment>
  );
};

export default WorkHistoryExpansionPanelHeading;
