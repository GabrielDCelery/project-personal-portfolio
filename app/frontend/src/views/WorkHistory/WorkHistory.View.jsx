import React from 'react';
import {
  Box,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import {
  ComponentExpansionPanelHeading,
  ComponentLeftAlignedContainer,
  ComponentSectionHeading,
  ComponentSectionParagraph
} from 'components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import config from 'config';

export default function WorkHistoryView({ getter, handler }) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer maxWidth="xl">
        {getter('isAnyWorkHistoryPanelOpen')() ? (
          <div style={{ display: 'flex', marginBottom: '1em' }}>
            <Typography component="div" style={{ flexGrow: 1 }}></Typography>
            <Button
              variant="outlined"
              onClick={handler('closeAllWorkHistoryItems')}
            >
              Close all tabs
            </Button>
          </div>
        ) : null}

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
                      <ComponentSectionHeading
                        label="About the company"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />
                      <Box p="2em">
                        {aboutTheCompany.map(({ type, content }, index) => {
                          return (
                            <ComponentSectionParagraph
                              key={`paragraph-${index}`}
                              type={type}
                              content={content}
                            />
                          );
                        })}
                      </Box>

                      <ComponentSectionHeading
                        label="Work summary"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

                      <Box p="2em">
                        {workSummary.map(({ type, content }, index) => {
                          return (
                            <ComponentSectionParagraph
                              key={`paragraph-${index}`}
                              type={type}
                              content={content}
                            />
                          );
                        })}
                      </Box>

                      <ComponentSectionHeading
                        label="Key responsibilities"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

                      <Box p="2em">
                        {keyResponsibilities.map(({ type, content }, index) => {
                          return (
                            <ComponentSectionParagraph
                              key={`paragraph-${index}`}
                              type={type}
                              content={content}
                              bgColor={config.styles.colors.lightYellow}
                            />
                          );
                        })}
                      </Box>

                      <ComponentSectionHeading
                        label="Primary Tech Stack"
                        bgColor={config.styles.colors.secondary}
                        labelColor={config.styles.colors.darkBgText}
                      />

                      <Box p="2em">
                        {technologies.map(({ type, content }, index) => {
                          return (
                            <ComponentSectionParagraph
                              key={`paragraph-${index}`}
                              type={type}
                              content={content}
                              bgColor={config.styles.colors.lightYellow}
                            />
                          );
                        })}
                      </Box>

                      <ComponentSectionHeading
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
                                  <ComponentExpansionPanelHeading
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
                                    <ComponentSectionHeading
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
                                            <ComponentSectionParagraph
                                              key={`paragraph-${index}`}
                                              type={type}
                                              content={content}
                                            />
                                          );
                                        }
                                      )}
                                    </Box>

                                    <ComponentSectionHeading
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
                                          <ComponentSectionParagraph
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

                                    <ComponentSectionHeading
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
                                            <ComponentSectionParagraph
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
      </ComponentLeftAlignedContainer>
      <Box height="4em" />
    </React.Fragment>
  );
}
