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
import {
  ComponentExpansionPanelHeading,
  ComponentLeftAlignedContainer,
  ComponentParagraphHeading
} from 'components';
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
                    <ComponentExpansionPanelHeading
                      labelFirst={name}
                      labelSecond={type}
                      labelColor={config.styles.colors.darkBgText}
                      bgColor={config.styles.colors.primary}
                      fontSize="1.3rem"
                    />
                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails style={{ padding: 0 }}>
                    <Box width="100%">
                      <ComponentParagraphHeading
                        label="Results"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

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

                      <ComponentParagraphHeading
                        label="Description"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />
                      <Box p="2em">
                        <Typography paragraph={true}>{description}</Typography>
                      </Box>

                      <ComponentParagraphHeading
                        label="Screenshot"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />
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
      <Box height="4em" />
    </React.Fragment>
  );
}
