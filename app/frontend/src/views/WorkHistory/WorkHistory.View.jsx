import React from 'react';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import { ComponentLeftAlignedContainer } from 'components';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import config from 'config';

const StyledList = styled.div`
  ul {
    padding: 0;
    list-style: none;
  }

  li {
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 6em;
    position: relative;
    font-size: 1.2em;

    &::after {
      content: '';
      height: 0.9em;
      width: 0.9em;
      border: 0.2em solid #5c5746;
      background: #eddbb4;
      display: block;
      position: absolute;
      transform: rotate(45deg);
      top: 1.3em;
      left: 3em;
    }
  }
`;

export default function WorkHistoryView({ getter, handler }) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer maxWidth="xl">
        <ExpansionPanel expanded={true}>
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
              <Box>
                <Typography variant="h6">AUTOLOGYX LLC</Typography>
              </Box>
              <Box flexGrow={1} />
              <Box>
                <Typography variant="h6">FULL STACK DEVELOPER</Typography>
              </Box>
              <Box flexGrow={1} />
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
                <Typography variant="h6">ABOUT THE COMPANY</Typography>
              </Box>
              <Box p="2em">
                <Typography paragraph={true}>
                  Autologyx provides process automation for complex operations
                  in the compliance and legal sector.
                </Typography>
              </Box>

              <Box
                bgcolor={config.styles.colors.secondary}
                color={config.styles.colors.darkBgText}
                px="2em"
                py="1em"
                width="100%"
              >
                <Typography variant="h6">WORK SUMMARY</Typography>
              </Box>
              <Box p="2em">
                <Typography paragraph={true}>
                  My role included maintaining the company’s internal
                  administrative web applications and public websites. Provided
                  support to the company’s clientele in both green-and
                  brownfield projects from tender through to completion.
                </Typography>
              </Box>

              <Box
                bgcolor={config.styles.colors.secondary}
                color={config.styles.colors.darkBgText}
                px="2em"
                py="1em"
                width="100%"
              >
                <Typography variant="h6">KEY RESPONSIBILITIES</Typography>
              </Box>
              <StyledList>
                <ul>
                  <li>
                    Created new- and extended existing modules to automate tasks
                    and scheduled processes
                  </li>
                  <li>
                    Built RESTful APIs for applications collecting and
                    processing survey data
                  </li>
                </ul>
              </StyledList>

              <Box
                bgcolor={config.styles.colors.secondary}
                color={config.styles.colors.darkBgText}
                px="2em"
                py="1em"
                width="100%"
              >
                <Typography variant="h6">PROJECTS SAMPLE</Typography>
              </Box>

              <div style={{ padding: 0 }}></div>

              <ExpansionPanel expanded={true} style={{ margin: 0 }}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  style={{
                    backgroundColor: '#eddbb4',
                    padding: '0 2em'
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    width="100%"
                    flexWrap="wrap"
                  >
                    <Box>
                      <Typography variant="h6">
                        INSURANCE RENEWAL DASHBOARD
                      </Typography>
                    </Box>
                    <Box flexGrow={1} />
                  </Box>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails style={{ padding: 0 }}>
                  <Box
                    bgcolor={'#5c5746'}
                    color={config.styles.colors.darkBgText}
                    px="2em"
                    py="1em"
                    width="100%"
                  >
                    <Typography variant="h6">GOAL</Typography>
                  </Box>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ComponentLeftAlignedContainer>
    </React.Fragment>
  );
}
