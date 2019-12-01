import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { ComponentLeftAlignedContainer, SkillCard } from 'components';
import mysql from 'assets/mysql.svg';
import nodejs from 'assets/nodejs.svg';
import react from 'assets/react.svg';
import config from 'config';
import nodejsbw from 'assets/nodejsbw.svg';
import {
  GridGenerator,
  HexGrid,
  Layout,
  Path,
  Hexagon,
  Text,
  Pattern,
  Hex
} from 'react-hexgrid';
//import './Skills.css';
import { SizeMe } from 'react-sizeme';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';

const StyledHexGrid = styled(HexGrid)`
  position: relative;
`;

const StyledHexagon = styled(Hexagon)`
  g {
    fill: #eddbb4;
    fill-opacity: 0.6;
    transition: all 1s;
  }

  g:hover {
    fill: #6e6959;
  }

  g text {
    font-size: 0.22em;
    fill: white;
    fill-opacity: 0.7;
    transition: fill-opacity 0.5s;
  }

  g polygon {
    stroke: #6e6959;
    stroke-width: 0.2;
    transition: fill-opacity 0.5s;
  }
`;

export default function SkillsView({ getter, handler }) {
  const [width, setWidth] = useState(0);
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer>
        <SizeMe>
          {({ size }) => {
            setWidth(size.width);
            return <Box style={{ width: '100%' }}></Box>;
          }}
        </SizeMe>
        <AnimateHeight
          duration={500}
          height={(2 / 3) * width || 0} // see props documentation below
        >
          {width ? (
            <React.Fragment>
              <StyledHexGrid
                width={width}
                height={(2 / 3) * width}
                viewBox="-50 -50 100 100"
              >
                {/* Main grid with bit hexagons, all manual */}
                <Layout
                  size={{ x: width / 150, y: width / 150 }}
                  flat={true}
                  spacing={1.1}
                  origin={{ x: 0, y: 0 }}
                >
                  <StyledHexagon q={0} r={0} s={0} />
                  {/* Using pattern (defined below) to fill the hexagon */}
                  <StyledHexagon q={0} r={-1} s={1} fill="pat-1" />
                  <StyledHexagon q={0} r={1} s={-1} />
                  <StyledHexagon q={1} r={-1} s={0}>
                    <Text>MySQL</Text>
                  </StyledHexagon>
                  <StyledHexagon q={1} r={0} s={-1}>
                    <Text>NodeJs</Text>
                  </StyledHexagon>
                  {/* Pattern and text */}
                  <StyledHexagon q={-1} r={1} s={0} fill="pat-2">
                    <Text>ReactJs</Text>
                  </StyledHexagon>
                  <StyledHexagon q={-1} r={0} s={1} />
                  <StyledHexagon q={-2} r={0} s={1} />
                  <Path start={new Hex(1, 0, -1)} end={new Hex(-2, 0, 1)} />
                </Layout>
                {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
                <Pattern
                  id="pat-1"
                  link="http://lorempixel.com/400/400/cats/1/"
                  size={{ x: width / 150, y: width / 150 }}
                />
                <Pattern
                  id="pat-2"
                  link="http://lorempixel.com/400/400/cats/2/"
                  size={{ x: width / 150, y: width / 150 }}
                />
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
