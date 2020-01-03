import { Hexagon } from 'react-hexgrid';
import styled from 'styled-components';
import Color from 'color';

export const SkillsHexagon = styled(Hexagon)`
  g {
    fill: ${({ bgColor }) => {
      return bgColor;
    }};
    /*fill-opacity: 0.9;*/
    transition: all 0.3s;
  }
/*
  g:hover {
    fill: ${({ bgColor }) => {
      return Color(bgColor)
        .lighten(0.3)
        .hex();
    }}
    cursor: pointer;
  }
*/
  g text {
    font-size: 0.1em;
    fill:${({ bgColor }) => {
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
    stroke: ${({ bgColor }) => {
      return Color(bgColor)
        .darken(0.2)
        .hex();
    }};
    stroke-width: 0.2;
    //transition: fill-opacity 0.3s;
  }
`;

export default SkillsHexagon;
