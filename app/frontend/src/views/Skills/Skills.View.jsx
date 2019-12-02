import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { ComponentLeftAlignedContainer, SkillCard } from 'components';
import mysql from 'assets/mysql.svg';
//import nodejs from 'assets/nodejs.svg';
import react from 'assets/react.svg';
import config from 'config';
import nodejsbw from 'assets/nodejsbw.svg';
import { HexGrid, Layout, Hexagon, Text } from 'react-hexgrid';
//import './Skills.css';
import { SizeMe } from 'react-sizeme';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Color from 'color';

import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const StyledHexGrid = styled(HexGrid)`
  position: relative;
`;

const StyledHexagon = styled(Hexagon)`
  g {
    fill: ${({ bgColor, width }) => {
      return bgColor;
    }};
    /*fill-opacity: 0.9;*/
    transition: all 0.3s;
  }

  g:hover {
    fill: ${({ bgColor, width }) => {
      return Color(bgColor)
        .lighten(0.3)
        .hex();
    }}
    cursor: pointer;
  }

  g text {
    font-size: 0.1em;
    fill:${({ bgColor, width }) => {
      const lightTextColor = '#fff';
      const darkTextColor = '#000';

      return Color(bgColor).contrast(Color(lightTextColor)) <
        Color(bgColor).contrast(Color(darkTextColor))
        ? Color(bgColor)
            .darken(0.7)
            .hex()
        : Color(bgColor)
            .lighten(0.7)
            .hex();
    }};
    //fill-opacity: 0.7;
    //transition: fill-opacity 0.3s;
  }

  g polygon {
    stroke: ${({ bgColor, width }) => {
      return Color(bgColor)
        .darken(0.2)
        .hex();
    }};
    stroke-width: 0.2;
    //transition: fill-opacity 0.3s;
  }
`;

const StyledVerticalGradientBox = styled(Box)`
  height: 100%;
  background: linear-gradient(
    180deg,
    ${config.styles.colors.tertiary} 0%,
    ${config.styles.colors.primary} 100%
  );
`;

export default function SkillsView({ getter, handler }) {
  const [width, setWidth] = useState(0);
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer>
        <Card>
          <CardContent
            style={{
              backgroundColor: config.styles.colors.primary,
              color: '#fff',
              borderBottom: '3px solid #000'
            }}
          >
            <div style={{ display: 'flex' }}>
              <Avatar
                aria-label="recipe"
                style={{
                  backgroundColor: config.styles.colors.secondary,
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
                  backgroundColor: Color(config.styles.colors.primary)
                    .lighten(0.2)
                    .hex(),
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

          <CardContent style={{ padding: 0 }}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <StyledVerticalGradientBox />
              </Grid>
              <Grid item xs={9}>
                <List dense={true}>
                  <ListItem>
                    <ListItemText primary="Have been using it on a daily basis or several projects for the past 2 years" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Several projects for atleast the past 2 years" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Atleast one project within the past 2 years" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Played around with it, hasn't used it in a commercial project" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <SizeMe>
          {({ size }) => {
            setWidth(size.width);
            return <Box style={{ width: '100%' }}></Box>;
          }}
        </SizeMe>
        <AnimateHeight
          duration={500}
          height={width || 0} // see props documentation below
        >
          {width ? (
            <React.Fragment>
              <StyledHexGrid width={width} height={width || 0}>
                {/* Main grid with bit hexagons, all manual */}
                <Layout
                  size={{ x: width / 200, y: width / 200 }}
                  flat={true}
                  spacing={1.1}
                  origin={{ x: 0, y: 0 }}
                >
                  {getter('stateFilteredSkillsItemsForHexMap').map(
                    ({ label, hexX, hexY, bgColor }, index) => {
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
                {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
              </StyledHexGrid>
            </React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </AnimateHeight>
      </ComponentLeftAlignedContainer>

      {true ? null : (
        <ComponentLeftAlignedContainer maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <SkillCard
                iconSrc={mysql}
                label="MySQL"
                cardBgColor={config.styles.colors.tertiary}
                iconBorderColor={config.styles.colors.quaternary}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <SkillCard
                iconSrc={nodejsbw}
                label="NodeJS"
                cardBgColor={config.styles.colors.tertiary}
                iconBorderColor={config.styles.colors.quaternary}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <SkillCard
                iconSrc={react}
                label="ReactJS"
                cardBgColor={config.styles.colors.tertiary}
                iconBorderColor={config.styles.colors.quaternary}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <SkillCard />
            </Grid>
          </Grid>
        </ComponentLeftAlignedContainer>
      )}
    </React.Fragment>
  );
}
