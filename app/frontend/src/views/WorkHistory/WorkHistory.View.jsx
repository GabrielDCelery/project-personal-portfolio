import React from 'react';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import {
  ComponentExpansionPanelHeading,
  ComponentLeftAlignedContainer,
  ComponentParagraphHeading,
  ComponentParagraphBody
} from 'components';
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
              aboutTheCompany,
              companyName,
              keyResponsibilities,
              position,
              workSummary,
              workedFromTo,
              projects
            },
            workHistoryItemIndex
          ) => {
            return (
              <React.Fragment key={`workHistory-item-${workHistoryItemIndex}`}>
                <ExpansionPanel
                  expanded={getter('isWorkHistoryPanelOpen')(
                    workHistoryItemIndex
                  )}
                  onChange={() => {
                    handler('setExpandedWorkItemPanel')(workHistoryItemIndex);
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
                      labelFirst={companyName}
                      labelSecond={position}
                      labelThird={workedFromTo}
                      labelColor={config.styles.colors.darkBgText}
                      bgColor={config.styles.colors.primary}
                      fontSize="1.3rem"
                    />
                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails style={{ padding: 0 }}>
                    <Box width="100%">
                      <ComponentParagraphHeading
                        label="About the company"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />
                      <ComponentParagraphBody paragraphs={aboutTheCompany} />

                      <ComponentParagraphHeading
                        label="Work summary"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

                      <ComponentParagraphBody paragraphs={workSummary} />

                      <ComponentParagraphHeading
                        label="Key responsibilities"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />
                      <ComponentParagraphBody
                        paragraphs={keyResponsibilities}
                      />

                      <ComponentParagraphHeading
                        label="Project samples"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

                      <div style={{ padding: 0 }}></div>

                      {projects.map(
                        ({ title, summary, tasks }, projectItemIndex) => {
                          return (
                            <React.Fragment key={`project-${projectItemIndex}`}>
                              <ExpansionPanel
                                expanded={true}
                                style={{ margin: 0 }}
                              >
                                <ExpansionPanelSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  style={{
                                    backgroundColor: '#eddbb4',
                                    padding: '0 2em'
                                  }}
                                >
                                  <ComponentExpansionPanelHeading
                                    labelFirst={title}
                                    labelColor={
                                      config.styles.colors.lightBgText
                                    }
                                    bgColor={config.styles.colors.tertiary}
                                    fontSize="0.9rem"
                                  />
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails style={{ padding: 0 }}>
                                  <Box width="100%">
                                    <ComponentParagraphHeading
                                      label="Summary"
                                      bgColor={config.styles.colors.quaternary}
                                      labelColor={
                                        config.styles.colors.darkBgText
                                      }
                                      fontSize="0.9rem"
                                    />
                                    <ComponentParagraphBody
                                      paragraphs={summary}
                                    />

                                    <ComponentParagraphHeading
                                      label="Key tasks"
                                      bgColor={config.styles.colors.quaternary}
                                      labelColor={
                                        config.styles.colors.darkBgText
                                      }
                                      fontSize="0.9rem"
                                    />

                                    <ComponentParagraphBody
                                      paragraphs={tasks}
                                    />
                                  </Box>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                            </React.Fragment>
                          );
                        }
                      )}
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
