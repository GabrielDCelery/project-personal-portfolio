import React from 'react';
import {
  //Container,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  Box,
  Grid,
  Link,
  Typography,
  ExpansionPanelSummary
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
  GitHub as GitHubIcon
} from '@material-ui/icons';
import { ComponentLeftAlignedContainer } from 'components';
import unleashTheGeekPreviewImage from 'assets/achievments/unleash_the_geek_001.jpg';
import halitePreviewImage from 'assets/achievments/halite3_001.jpg';
import config from 'config';
//import { SizeMe } from 'react-sizeme';

const previewImageSrcMap = {
  unleashTheGeekPreviewImage,
  halitePreviewImage
};

export default function AchievmentsView({ getter, handler }) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer maxWidth="xl">
        {getter('items').map(
          (
            {
              name,
              type,
              codeUrl,
              reportUrl,
              description,
              finalPlace,
              numOfCompetitors,
              previewImage
            },
            index
          ) => {
            return (
              <React.Fragment key={`competition-item-${index}`}>
                <ExpansionPanel
                  expanded={getter('isPanelOpen')(index)}
                  onChange={() => {
                    handler('setExpandedPanel')(index);
                  }}
                >
                  <ExpansionPanelSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: config.styles.colors.darkBgText }}
                      />
                    }
                    style={{
                      backgroundColor: config.styles.colors.primary,
                      padding: '0 2em'
                    }}
                  >
                    <Box
                      color={config.styles.colors.darkBgText}
                      display="flex"
                      flexDirection="row"
                      width="100%"
                      flexWrap="wrap"
                    >
                      <Box flexGrow={1} style={{ flexBasis: 0 }}>
                        <Typography variant="h5">{name}</Typography>
                      </Box>
                      <Box flexGrow={1} style={{ flexBasis: 0 }}>
                        <Typography variant="h6">{type}</Typography>
                      </Box>
                      <Box flexGrow={1} style={{ flexBasis: 0 }} />
                    </Box>
                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails style={{ padding: 0 }}>
                    <Box width="100%">
                      <Box
                        bgcolor={config.styles.colors.secondary}
                        color={config.styles.colors.darkBgText}
                        px="2em"
                        py="1em"
                        width="100%"
                      >
                        <Typography variant="h6">Results</Typography>
                      </Box>

                      <Box p="0">
                        <Grid container>
                          <Grid item md={6} sm={12}>
                            <Box p="1em" textAlign="center">
                              <Link
                                href={reportUrl}
                                target="_blank"
                                underline="none"
                              >
                                <Button
                                  fullWidth
                                  variant="outlined"
                                  color="primary"
                                  size="large"
                                >
                                  {`Final Place ${finalPlace} out of ${numOfCompetitors}`}
                                </Button>
                              </Link>
                            </Box>
                          </Grid>

                          <Grid item md={6} sm={12}>
                            <Box p="1em" textAlign="center">
                              <Link
                                href={codeUrl}
                                target="_blank"
                                underline="none"
                              >
                                <Button
                                  fullWidth
                                  variant="outlined"
                                  color="primary"
                                  size="large"
                                >
                                  Link to project (with post mortem){' '}
                                  <GitHubIcon style={{ marginLeft: '10px' }} />
                                </Button>
                              </Link>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box
                        bgcolor={config.styles.colors.secondary}
                        color={config.styles.colors.darkBgText}
                        px="2em"
                        py="1em"
                        width="100%"
                      >
                        <Typography variant="h6">Description</Typography>
                      </Box>
                      <Box p="2em">
                        <Typography paragraph={true}>{description}</Typography>
                      </Box>

                      <Box
                        bgcolor={config.styles.colors.secondary}
                        color={config.styles.colors.darkBgText}
                        px="2em"
                        py="1em"
                        width="100%"
                      >
                        <Typography variant="h6">Screenshot</Typography>
                      </Box>
                      <Box p="0">
                        <img
                          src={previewImageSrcMap[previewImage]}
                          alt="Unleash the Geek preview"
                          style={{ width: '100%' }}
                        />
                      </Box>
                    </Box>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </React.Fragment>
            );
          }
        )}
      </ComponentLeftAlignedContainer>
      <Box height="2em" />
    </React.Fragment>
  );
}
