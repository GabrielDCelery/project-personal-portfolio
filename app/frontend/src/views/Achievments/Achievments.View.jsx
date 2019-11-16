import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  //Paper,
  Typography,
  Grid
} from '@material-ui/core';
import {
  ComponentLeftAlignedContainer,
  ComponentVerticalGutter
} from 'components';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import unleashTheGeekPreviewImage from 'assets/achievments/unleash_the_geek_001.jpg';
import halitePreviewImage from 'assets/achievments/halite3_001.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

//import { SizeMe } from 'react-sizeme';

const previewImageSrcMap = {
  unleashTheGeekPreviewImage,
  halitePreviewImage
};

const StyledTypography = styled.div`
  width: 100%;
  background: #082431;
  padding: 12px 24px !important;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export default function AchievmentsView({ getter, handler }) {
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
