import React from 'react';
import { Box } from '@material-ui/core';
import config from 'config';
import { HexGrid, Hexagon } from 'react-hexgrid';
import styled from 'styled-components';
import Color from 'color';

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
/*
  g:hover {
    fill: ${({ bgColor, width }) => {
      return Color(bgColor)
        .lighten(0.3)
        .hex();
    }}
    cursor: pointer;
  }
*/
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

export default function SkillsStyles(ToWrapComponent) {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
        {...{ StyledHexGrid, StyledHexagon, StyledVerticalGradientBox }}
      />
    );
  };

  return WrapperComponent;
}
