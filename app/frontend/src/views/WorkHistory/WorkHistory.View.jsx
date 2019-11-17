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
        {getter('items').map(
          (
            {
              companyName,
              position,
              aboutTheCompany,
              workSummary,
              keyResponsibilities
            },
            index
          ) => {
            return (
              <React.Fragment key={`workHistory-item-${index}`}>
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
                      <Box>
                        <Typography variant="h5">{companyName}</Typography>
                      </Box>
                      <Box flexGrow={1} />
                      <Box>
                        <Typography variant="h6">{position}</Typography>
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
                        <Typography variant="h6">About the company</Typography>
                      </Box>
                      <Box p="2em">
                        <Typography paragraph={true}>
                          {aboutTheCompany}
                        </Typography>
                      </Box>

                      <Box
                        bgcolor={config.styles.colors.secondary}
                        color={config.styles.colors.darkBgText}
                        px="2em"
                        py="1em"
                        width="100%"
                      >
                        <Typography variant="h6">Work summary</Typography>
                      </Box>
                      <Box p="2em">
                        <Typography paragraph={true}>{workSummary}</Typography>
                      </Box>

                      <Box
                        bgcolor={config.styles.colors.secondary}
                        color={config.styles.colors.darkBgText}
                        px="2em"
                        py="1em"
                        width="100%"
                      >
                        <Typography variant="h6">
                          Key responsibilities
                        </Typography>
                      </Box>
                      <StyledList>
                        <ul>
                          {keyResponsibilities.map(
                            (keyResponsibility, index) => {
                              return (
                                <React.Fragment
                                  key={`key-responsibility-${index}`}
                                >
                                  <li>{keyResponsibility}</li>
                                </React.Fragment>
                              );
                            }
                          )}
                        </ul>
                      </StyledList>

                      <Box
                        bgcolor={config.styles.colors.secondary}
                        color={config.styles.colors.darkBgText}
                        px="2em"
                        py="1em"
                        width="100%"
                      >
                        <Typography variant="h6">Projects sample</Typography>
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
                                Insurance Renewal Dashboard
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
                            <Typography variant="h6">Goal</Typography>
                          </Box>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Box>
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
