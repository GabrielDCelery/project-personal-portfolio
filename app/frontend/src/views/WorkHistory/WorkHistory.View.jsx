import React from 'react';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from '@material-ui/core';
import {
  ComponentExpansionPanelHeading,
  ComponentLeftAlignedContainer,
  ComponentParagraphHeading,
  ComponentParagraphBody
} from 'components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import config from 'config';

export default function WorkHistoryView({ getter, handler }) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer maxWidth="xl">
        {getter('workHistoryItems').map(
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
                      padding: '0 2em',
                      borderBottom: '3px solid #000'
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
                          const projectKey = `wi${workHistoryItemIndex}_pi${projectItemIndex}`;
                          return (
                            <React.Fragment key={`project-${projectKey}`}>
                              <ExpansionPanel
                                expanded={getter('isProjectPanelOpen')(
                                  projectKey
                                )}
                                onChange={() => {
                                  handler('setExpandedProjectPanel')(
                                    projectKey
                                  );
                                }}
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
                                      styleListColor={
                                        config.styles.colors.lightBlue
                                      }
                                      styledListBorderColor={
                                        config.styles.colors.lightBlueBorder
                                      }
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
      <Box height="4em" />
    </React.Fragment>
  );
}
