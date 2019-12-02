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
  TextField
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
  }

  g text {
    font-size: 0.1em;
    fill: #000;
    fill-opacity: 0.7;
    transition: fill-opacity 0.3s;
  }

  g polygon {
    stroke: #6e6959;
    stroke-width: 0.2;
    transition: fill-opacity 0.3s;
  }
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
              color: '#fff'
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
                  size={{ x: width / 180, y: width / 180 }}
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
