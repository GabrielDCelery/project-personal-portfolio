import React from 'react';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from '@material-ui/core';
import {
  WorkHistoryExpansionPanelHeading,
  UILeftAlignedContainer,
  WorkHistorySectionHeading,
  WorkHistorySectionParagraph
} from 'components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import config from 'config';

export default function WorkHistoryView({ getter, handler }) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <UILeftAlignedContainer maxWidth="xl">
        {getter('workHistoryItems').map(
          (
            {
              aboutTheCompany,
              companyName,
              keyResponsibilities,
              position,
              projects,
              technologies,
              workSummary,
              workedFromTo
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
                    <WorkHistoryExpansionPanelHeading
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
                      <WorkHistorySectionHeading
                        label="About the company"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />
                      <Box p="2em">
                        {aboutTheCompany.map(({ type, content }, index) => {
                          return (
                            <WorkHistorySectionParagraph
                              key={`paragraph-${index}`}
                              type={type}
                              content={content}
                            />
                          );
                        })}
                      </Box>

                      <WorkHistorySectionHeading
                        label="Work summary"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

                      <Box p="2em">
                        {workSummary.map(({ type, content }, index) => {
                          return (
                            <WorkHistorySectionParagraph
                              key={`paragraph-${index}`}
                              type={type}
                              content={content}
                            />
                          );
                        })}
                      </Box>

                      <WorkHistorySectionHeading
                        label="Key responsibilities"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

                      <Box p="2em">
                        {keyResponsibilities.map(({ type, content }, index) => {
                          return (
                            <WorkHistorySectionParagraph
                              key={`paragraph-${index}`}
                              type={type}
                              content={content}
                              bgColor={config.styles.colors.lightYellow}
                            />
                          );
                        })}
                      </Box>

                      <WorkHistorySectionHeading
                        label="Primary Tech Stack"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

                      <Box p="2em">
                        {technologies.map(({ type, content }, index) => {
                          return (
                            <WorkHistorySectionParagraph
                              key={`paragraph-${index}`}
                              type={type}
                              content={content}
                              bgColor={config.styles.colors.lightYellow}
                            />
                          );
                        })}
                      </Box>

                      <WorkHistorySectionHeading
                        label="Notable projects"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

                      <div style={{ padding: 0 }}></div>

                      {projects.map(
                        (
                          { title, summary, tasks, technologies },
                          projectItemIndex
                        ) => {
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
                                    backgroundColor:
                                      config.styles.colors.lightYellow,
                                    padding: '0 2em'
                                  }}
                                >
                                  <WorkHistoryExpansionPanelHeading
                                    labelFirst={title}
                                    labelColor={
                                      config.styles.colors.lightBgText
                                    }
                                    bgColor={config.styles.colors.lightYellow}
                                    fontSize="0.9rem"
                                  />
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails style={{ padding: 0 }}>
                                  <Box width="100%">
                                    <WorkHistorySectionHeading
                                      label="Summary"
                                      bgColor={
                                        config.styles.colors.lightYellowBorder
                                      }
                                      labelColor={
                                        config.styles.colors.darkBgText
                                      }
                                      fontSize="0.9rem"
                                    />

                                    <Box p="2em">
                                      {summary.map(
                                        ({ type, content }, index) => {
                                          return (
                                            <WorkHistorySectionParagraph
                                              key={`paragraph-${index}`}
                                              type={type}
                                              content={content}
                                            />
                                          );
                                        }
                                      )}
                                    </Box>

                                    <WorkHistorySectionHeading
                                      label="Key tasks"
                                      bgColor={
                                        config.styles.colors.lightYellowBorder
                                      }
                                      labelColor={
                                        config.styles.colors.darkBgText
                                      }
                                      fontSize="0.9rem"
                                    />

                                    <Box p="2em">
                                      {tasks.map(({ type, content }, index) => {
                                        return (
                                          <WorkHistorySectionParagraph
                                            key={`paragraph-${index}`}
                                            type={type}
                                            content={content}
                                            bgColor={
                                              config.styles.colors.lightBlue
                                            }
                                            borderColor={
                                              config.styles.colors
                                                .lightBlueBorder
                                            }
                                          />
                                        );
                                      })}
                                    </Box>

                                    <WorkHistorySectionHeading
                                      label="Primary Tech Stack"
                                      bgColor={
                                        config.styles.colors.lightYellowBorder
                                      }
                                      labelColor={
                                        config.styles.colors.darkBgText
                                      }
                                      fontSize="0.9rem"
                                    />

                                    <Box p="2em">
                                      {technologies.map(
                                        ({ type, content }, index) => {
                                          return (
                                            <WorkHistorySectionParagraph
                                              key={`paragraph-${index}`}
                                              type={type}
                                              content={content}
                                              bgColor={
                                                config.styles.colors.lightBlue
                                              }
                                              borderColor={
                                                config.styles.colors
                                                  .lightBlueBorder
                                              }
                                            />
                                          );
                                        }
                                      )}
                                    </Box>
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
      </UILeftAlignedContainer>
      <Box height="4em" />
    </React.Fragment>
  );
}
