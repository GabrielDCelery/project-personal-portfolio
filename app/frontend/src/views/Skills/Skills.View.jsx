import React from 'react';
import { Box, Grid, Hidden } from '@material-ui/core';
import { UILeftAlignedContainer, SkillsCard } from 'components';
import config from 'config';
import { Layout, Text } from 'react-hexgrid';
import { SizeMe } from 'react-sizeme';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import {
  Avatar,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

export default function SkillsView({
  StyledHexGrid,
  StyledHexagon,
  StyledVerticalGradientBox,
  getter,
  handler
}) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <UILeftAlignedContainer maxWidth="xl">
        <Card>
          <CardContent
            style={{
              backgroundColor: config.styles.colors.secondary,
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex' }}>
              <Typography component="div" style={{ flexGrow: 1 }}>
                <Typography component="p" style={{ color: '#ddd' }}>
                  SKILLS HEATMAP
                </Typography>
              </Typography>
              <Typography component="div" style={{ flexGrow: 1 }}></Typography>
            </div>
          </CardContent>

          <CardContent style={{ padding: 0, borderBottom: '3px solid #000' }}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <StyledVerticalGradientBox />
              </Grid>
              <Grid item xs={9}>
                <List dense={true}>
                  <ListItem>
                    <ListItemText primary="Have been using it on a daily basis or several commercial projects for the past 2 years" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Several commercial projects for atleast the past 2 years" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Atleast one commercial project within the past 2 years" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Atleast one personal project in the subject" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Has completed atleast one online course in the subject" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Played around with it, hasn't used it in a commercial project" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>

          <CardContent
            style={{
              backgroundColor: config.styles.colors.secondary,
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex' }}>
              <Avatar
                aria-label="recipe"
                style={{
                  backgroundColor: config.styles.colors.primary,
                  marginRight: '1em'
                }}
              >
                <SearchIcon />
              </Avatar>

              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                style={{
                  color: '#fff',
                  backgroundColor: config.styles.colors.primary,
                  borderRadius: '5px',
                  paddingLeft: '1em'
                }}
                value={getter('stateSkillsVisibilityFilter')}
                onChange={event => {
                  handler('actionSetSkillsVisibilityFilter')(
                    event.target.value
                  );
                }}
              />

              <Typography component="div" style={{ flexGrow: 1 }}></Typography>
            </div>
          </CardContent>
        </Card>

        <SizeMe>
          {({ size }) => {
            handler('layout', 'hexGrid', 'setWidth')(size.width * 0.8);
            return <Box style={{ height: '1px', width: '100%' }}></Box>;
          }}
        </SizeMe>

        <Hidden lgUp>
          <div
            style={{
              margin: '0 auto',
              marginTop: '30px'
            }}
          >
            {getter('filteredSkillsItemsForGridMap')().map(
              (skillItems, rowIndex) => {
                return (
                  <React.Fragment key={`skills-row-${rowIndex}`}>
                    <Grid container>
                      {skillItems.map(({ label, bgColor }, colIndex) => {
                        return (
                          <React.Fragment key={`skills-col-${colIndex}`}>
                            <Grid item xs={12} sm={4}>
                              <SkillsCard label={label} bgColor={bgColor} />
                            </Grid>
                          </React.Fragment>
                        );
                      })}
                    </Grid>
                  </React.Fragment>
                );
              }
            )}
          </div>
        </Hidden>

        <Hidden mdDown>
          <div
            style={{
              width: getter('layout', 'hexGrid', 'width'),
              margin: '0 auto'
            }}
          >
            {getter('layout', 'hexGrid', 'width') ? (
              <React.Fragment>
                <StyledHexGrid
                  width={getter('layout', 'hexGrid', 'width')}
                  height={getter('layout', 'hexGrid', 'height')}
                  viewBox={getter('layout', 'hexViewBox')()}
                >
                  <Layout
                    size={{
                      x: getter('layout', 'hexCell', 'width'),
                      y: getter('layout', 'hexCell', 'height')
                    }}
                    flat={true}
                    spacing={1.1}
                    origin={{ x: 0, y: 0 }}
                  >
                    {getter('stateFilteredSkillItems').map(
                      ({ label, bgColor }, index) => {
                        const [hexX, hexY] = getter('hexGridSpiralCoordinates')[
                          index
                        ];
                        return (
                          <React.Fragment key={`hex-${index}`}>
                            <StyledHexagon
                              q={hexX}
                              r={hexY}
                              s={0}
                              bgColor={bgColor}
                            >
                              <Text>{label}</Text>
                            </StyledHexagon>
                          </React.Fragment>
                        );
                      }
                    )}
                  </Layout>
                </StyledHexGrid>
              </React.Fragment>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </div>
        </Hidden>
      </UILeftAlignedContainer>
    </React.Fragment>
  );
}
