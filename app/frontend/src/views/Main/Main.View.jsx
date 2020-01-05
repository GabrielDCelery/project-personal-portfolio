import React from 'react';
import { Box, Hidden } from '@material-ui/core';
import UIFlexboxCenterPositioner from 'components/UI/FlexBoxCenterPositioner';
import UILeftAlignedContainer from 'components/UI/LeftAlignedContainer';
import config from 'config';

export default function MainView() {
  return (
    <React.Fragment>
      <Box height="2em" />
      <UILeftAlignedContainer maxWidth="xl">
        <Box textAlign="center" height="70vh">
          <UIFlexboxCenterPositioner>
            <Box>
              <Hidden mdUp>
                <Box
                  fontSize="h4.fontSize"
                  color={config.styles.colors.primary}
                >
                  GABRIEL ZELLER
                </Box>
                <Box height="1em" />
                <Box
                  fontSize="h5.fontSize"
                  color={config.styles.colors.secondary}
                >
                  Full Stack Developer
                </Box>
              </Hidden>
              <Hidden smDown>
                <Box
                  fontSize="h2.fontSize"
                  color={config.styles.colors.primary}
                >
                  GABRIEL ZELLER
                </Box>
                <Box height="1em" />
                <Box
                  fontSize="h3.fontSize"
                  color={config.styles.colors.secondary}
                >
                  Full Stack Developer
                </Box>
              </Hidden>
            </Box>
          </UIFlexboxCenterPositioner>
        </Box>
      </UILeftAlignedContainer>
    </React.Fragment>
  );
}
