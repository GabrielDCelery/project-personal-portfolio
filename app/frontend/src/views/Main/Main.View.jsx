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
        <Box textAlign="center">
          <Hidden mdUp>
            <Box height="30vh">
              <UIFlexboxCenterPositioner>
                <Box>
                  <Box
                    fontSize="h3.fontSize"
                    color={config.styles.colors.primary}
                  >
                    GABRIEL ZELLER
                  </Box>
                  <Box
                    fontSize="h5.fontSize"
                    color={config.styles.colors.secondary}
                  >
                    Full Stack Developer
                  </Box>
                </Box>
              </UIFlexboxCenterPositioner>
            </Box>
          </Hidden>
          <Hidden smDown>
            <Box height="70vh">
              <UIFlexboxCenterPositioner>
                <Box>
                  <Box
                    fontSize="h1.fontSize"
                    color={config.styles.colors.primary}
                  >
                    GABRIEL ZELLER
                  </Box>
                  <Box
                    fontSize="h2.fontSize"
                    color={config.styles.colors.secondary}
                  >
                    Full Stack Developer
                  </Box>
                </Box>
              </UIFlexboxCenterPositioner>
            </Box>
          </Hidden>
        </Box>
      </UILeftAlignedContainer>
    </React.Fragment>
  );
}
