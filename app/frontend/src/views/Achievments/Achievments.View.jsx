import React from 'react';
import styled from 'styled-components';
import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Link,
  Typography
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
  GitHub as GitHubIcon
} from '@material-ui/icons';
import {
  ComponentLeftAlignedContainer,
  ComponentVerticalGutter
} from 'components';
import unleashTheGeekPreviewImage from 'assets/achievments/unleash_the_geek_001.jpg';
import halitePreviewImage from 'assets/achievments/halite3_001.jpg';

//import { SizeMe } from 'react-sizeme';

const previewImageSrcMap = {
  unleashTheGeekPreviewImage,
  halitePreviewImage
};

export default function AchievmentsView({ StyledTypography, getter, handler }) {
  return (
    <React.Fragment>
      <ComponentVerticalGutter height="2em" />
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
                    expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                    style={{ backgroundColor: '#275a71' }}
                  >
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        flexBasis: '33.33%',
                        flexShrink: 0,
                        color: '#fff'
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography style={{ color: '#ddd', fontWeight: 'bold' }}>
                      {type}
                    </Typography>
                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails style={{ padding: 0 }}>
                    <div style={{ width: '100%' }}>
                      <StyledTypography>RESULTS</StyledTypography>

                      <div style={{ padding: 0 }}>
                        <Grid container>
                          <Grid item md={6} sm={12}>
                            <div
                              style={{ padding: '1em', textAlign: 'center' }}
                            >
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
                            </div>
                          </Grid>

                          <Grid item md={6} sm={12}>
                            <div
                              style={{ padding: '1em', textAlign: 'center' }}
                            >
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
                            </div>
                          </Grid>
                        </Grid>
                      </div>

                      <StyledTypography>DESCRIPTION</StyledTypography>
                      <div style={{ padding: '1em' }}>
                        <p>{description}</p>
                      </div>

                      <StyledTypography>SCREENSHOT</StyledTypography>
                      <div style={{ padding: 0 }}>
                        <img
                          src={previewImageSrcMap[previewImage]}
                          alt="Unleash the Geek preview"
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </React.Fragment>
            );
          }
        )}
      </ComponentLeftAlignedContainer>
    </React.Fragment>
  );
}
