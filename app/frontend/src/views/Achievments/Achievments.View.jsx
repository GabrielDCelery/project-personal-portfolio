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
import preview from 'assets/achievments/unleash_the_geek_001.jpg';
import halitePreviewImage from 'assets/achievments/halite3_001.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { SizeMe } from 'react-sizeme';

const StyledTypography = styled.div`
  width: 100%;
  background: #082431;
  padding: 24px !important;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const StyledTypography2 = styled.div`
  width: 100%;
  background: #082431;
  padding: 1rem !important;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export default function AchievmentsView({ getter, handler }) {
  return (
    <React.Fragment>
      <ComponentVerticalGutter />
      <ComponentLeftAlignedContainer maxWidth="xl">
        <ExpansionPanel
          expanded={getter('isPanelOpen')('panel1')}
          onChange={() => {
            handler('setExpandedPanel')('panel1');
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
              HALITE 3
            </Typography>
            <Typography style={{ color: '#ddd', fontWeight: 'bold' }}>
              AI challenge
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails style={{ padding: 0 }}>
            <div style={{ width: '100%' }}>
              <StyledTypography>SUMMARY</StyledTypography>

              <div style={{ padding: 0 }}>
                <Grid container>
                  <Grid item md={6} sm={12}>
                    <div style={{ padding: '1em', textAlign: 'center' }}>
                      <Link
                        href="https://2018.halite.io/user/?user_id=7606"
                        target="_blank"
                        underline="none"
                      >
                        <Button
                          fullWidth
                          variant="outlined"
                          color="primary"
                          size="large"
                        >
                          Final Place 222 out of 4014
                        </Button>
                      </Link>
                    </div>
                  </Grid>

                  <Grid item md={6} sm={12}>
                    <div style={{ padding: '1em', textAlign: 'center' }}>
                      <Link
                        href="https://github.com/GabrielDCelery/competition-halite-iii"
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
                <p>
                  This is my bot for the 10 days Unleash the Geek competition.
                  It is a 1v1 game where you have to collect more ore than your
                  opponent given a set amount of turns.
                </p>
              </div>

              <StyledTypography>RULES</StyledTypography>
              <div style={{ padding: '1em' }}>
                <p>
                  Halite III is a resource management game in which players
                  build and command ships that explore the ocean and collect
                  halite. Ships use halite as an energy source, and the player
                  with the most stored halite at the end of the game is the
                  winner.
                </p>
              </div>

              <StyledTypography>SCREENSHOT</StyledTypography>
              <div style={{ padding: 0 }}>
                <img
                  src={halitePreviewImage}
                  alt="Unleash the Geek preview"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={getter('isPanelOpen')('panel2')}
          onChange={() => {
            handler('setExpandedPanel')('panel2');
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
              UNLEASH THE GEEK
            </Typography>
            <Typography style={{ color: '#ddd', fontWeight: 'bold' }}>
              AI challenge
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ padding: 0 }}>
            <div style={{ width: '100%' }}>
              <StyledTypography>SUMMARY</StyledTypography>

              <div style={{ padding: 0 }}>
                <Grid container>
                  <Grid item md={6} sm={12}>
                    <div style={{ padding: '1em', textAlign: 'center' }}>
                      <Link
                        href="https://www.codingame.com/challengereport/2267122999d7bcac925c923b59faa97cf2624883"
                        target="_blank"
                        underline="none"
                      >
                        <Button
                          fullWidth
                          variant="outlined"
                          color="primary"
                          size="large"
                        >
                          Final Place 1151 out of 2162
                        </Button>
                      </Link>
                    </div>
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <div style={{ padding: '1em', textAlign: 'center' }}>
                      <Link
                        href="https://github.com/GabrielDCelery/competition-codingame-unleash-the-geek"
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
                <p>
                  Bot for the 10 days Unleash the Geek competition. It is a 1v1
                  game where you have to collect more ore than your opponent
                  given a set amount of turns.
                </p>
              </div>

              <StyledTypography>RULES</StyledTypography>
              <div style={{ padding: '1em' }}>
                <p>
                  Both players control a team of several robots. The teams start
                  out at the same points on the map, at the headquarters. The
                  robots can use radars from the headquarters to detect and mine
                  Amadeusium veins. They may also trap certain areas of the map
                  with EMP traps. These can be triggered by robots which are
                  then rendered inoperable.
                </p>
              </div>

              <StyledTypography>SCREENSHOT</StyledTypography>
              <div style={{ padding: 0 }}>
                <img
                  src={preview}
                  alt="Unleash the Geek preview"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ComponentLeftAlignedContainer>
    </React.Fragment>
  );
}
